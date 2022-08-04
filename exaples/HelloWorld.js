/*
import {render,createComponent} from './dino'
createComponent(()=>{
    return {
        render : ()=>{
            retrun <H1>Hello World</H1> 
        }
    }
})

createComponent((dependencies)=>{
    return {
        init:(context)=>{
            console.log('Compoennt is intialised without any data')
            // use this to fill default context passed into the props
        }
        beforeRender:()=>{
            console.log('UI is about to render do seomething if u want to do')
            
            const myData = this.getData('http://localhost:3000/')
            hooks.setState(myData)

        },
        afterUpdate:()=>{
            // the ui just got updated , please dont update again your state here via setState()
            
            // after 5 seconds chnage the state
            setTimeout(()=>{
                this.setState('Welcome to Dino')
            },5000)

        }
        render:()=><H1>`${this.state}`</H1>
    }
})

====REWRITING THE ABOVE=====

const myBanner = createComponent(({getData})=>{
    return {
        beforeRender:({setState})=>{
            console.log('UI is about to render do seomething if u want to do')
            const myData = dependencies.getData('http://localhost:3000/')
            setState(myData)
        },
        afterUpdate:({setState})=>{
            // the ui just got updated , please dont update again your state here via setState()
            // after 5 seconds chnage the state
            setTimeout(()=>{
                setState('Welcome to Dino')
            },5000)

        }
        render:(_,__,state)=><H1>`${state}`</H1>
    }
})

const myRootDom = document.getElementbyId('root')
render(myBanner,myRootDom)

+++++ DINO Component Lifecycle ++++

                            |-------------------->afterUpdate
                            |
init -> beforeRender -> render  <------------
            |               |               |
            |------------------>setState-----
*/
