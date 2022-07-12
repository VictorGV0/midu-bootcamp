import {useState, useEffect, useRef} from 'react'

export function useNearScreen ({distance = '100px'} = {}){
    const fromRef = useRef()
    const [isNearScreen, setNear] = useState(false)

    useEffect(function () {
        let observer
        const onChange = (entries, observer) => {
            const el = entries[0]

            if (el.isIntersecting) {
                setNear(true)
                observer.disconnect()
            }
        }
//Polyfill Intersection Observer for Browsers without that API

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
            ? IntersectionObserver
            : import ('intersection-observer')
        ).then(()=>{
            const observer = new IntersectionObserver(onChange, {
                rootMargin: distance
            })
    
            observer.observe(fromRef.current)
        })

        
        
        return () => observer && observer.disconnect()
    })
    return {isNearScreen, fromRef}
}