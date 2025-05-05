import NavigationStrings from '../constants/NavigationStrings'
import BottomTabs from './BottomTabs'
import { MapScreen, ProductScreen } from '../Screens'
import React from 'react'



const MainStack = (Stack: any) => {
    return (
        <React.Fragment>
            <Stack.Screen name={NavigationStrings.BOTTOM_TABS} component={BottomTabs} />
            <Stack.Screen name={NavigationStrings.MAP_SCREEN} component={MapScreen} />
            <Stack.Screen options={{ presentation: 'containedTransparentModal' }} name={NavigationStrings.PRODUCT_SCREEN} component={ProductScreen} />
        </React.Fragment>
    )
}

export default MainStack