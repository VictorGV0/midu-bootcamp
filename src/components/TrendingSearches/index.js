import React, { Suspense } from 'react'
import {useNearScreen} from 'hooks/useNearScreen'

const TrendingSearches = React.lazy(
    ()=> import('./TrendingSearches')
)
export function Lazytrending (){
    
    const {isNearScreen, fromRef} = useNearScreen({distance: '50px'})
    

    
    return <div ref={fromRef}>
        <Suspense fallback={'Cargando...'}>
        {isNearScreen ? <TrendingSearches/> : null}
        </Suspense>

    </div>
}