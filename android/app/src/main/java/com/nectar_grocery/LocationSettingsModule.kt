package com.nectar_grocery

import android.app.Activity
import android.content.Intent
import android.content.IntentSender
import com.google.android.gms.location.Priority
import com.google.android.gms.location.LocationRequest
import com.facebook.react.bridge.*
import com.google.android.gms.common.api.ResolvableApiException
import com.google.android.gms.location.*
import com.google.android.gms.location.LocationSettingsRequest

class LocationSettingsModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext), ActivityEventListener {

    private var locationPromise: Promise? = null

    init {
        reactContext.addActivityEventListener(this)
    }

    override fun getName(): String = "LocationSettings"

    @ReactMethod
    fun promptForEnableLocation(promise: Promise) {
        val activity: Activity? = currentActivity

        if (activity == null) {
            promise.reject("NO_ACTIVITY", "Activity is null")
            return
        }

        locationPromise = promise

        val locationRequest = LocationRequest.Builder(Priority.PRIORITY_HIGH_ACCURACY, 10_000L)
            .setMinUpdateIntervalMillis(5_000L)
            .build()

        val builder = LocationSettingsRequest.Builder()
            .addLocationRequest(locationRequest)
            .setAlwaysShow(true)

        val client = LocationServices.getSettingsClient(activity)
        val task = client.checkLocationSettings(builder.build())

        task.addOnSuccessListener {
            promise.resolve(true)
        }

        task.addOnFailureListener { exception ->
            if (exception is ResolvableApiException) {
                try {
                    exception.startResolutionForResult(activity, REQUEST_CODE)
                } catch (sendEx: IntentSender.SendIntentException) {
                    promise.reject("SEND_INTENT_ERROR", sendEx.message)
                }
            } else {
                promise.reject("UNRESOLVABLE", exception.message)
            }
        }
    }

    override fun onActivityResult(activity: Activity?, requestCode: Int, resultCode: Int, data: Intent?) {
        if (requestCode == REQUEST_CODE) {
            if (resultCode == Activity.RESULT_OK) {
                locationPromise?.resolve(true)
            } else {
                locationPromise?.reject("CANCELED", "User canceled location enabling")
            }
            locationPromise = null // clear it to avoid memory leaks
        }
    }

    override fun onNewIntent(intent: Intent?) {
        // Not needed for this use case
    }

    @ReactMethod
    fun testMethod(promise: Promise) {
        promise.resolve("Hello from native!")
    }

    companion object {
        const val REQUEST_CODE = 12345
    }
}
