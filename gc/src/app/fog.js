'use-client'

import {useCallback} from "react"
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

export default function Fog(){
    const particlesInit = useCallback(async(engine)=>{
        await loadSlim(engine)
    },[])


    return(
        <Particles
        id = "fog"
        init={particlesInit}
        options={{
            fullScreen: {enable: false},
            background: {color: {value: "transparent"}},
            particles: {
                number: {value:40},
                color: {value: "ffffff"},
                opacity:{
                    value:0.08,
                    random: true,
                    animation:{
                        enable:true,
                        speed: 0.5,
                        minimumValue: 0.02,
                        sync: false,
                    },
                },
                size:{
                    value:80,
                    random:true,
                },
                move:{
                    enable: true,
                    speed: 0.3,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: "out",
                },
            },
            detectRetina: true,
        }}
        />
    
    )
}