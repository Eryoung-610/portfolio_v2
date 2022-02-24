import Particles from "react-tsparticles"

const ParticleBackground = () => {
    return (
        <div>
            <Particles 
            
            options={{
                "fullScreen": {
                  "zIndex": -1
                },
                "interactivity": {
                  "events": {
                    "onClick": {
                      "mode": "repulse"
                    }
                  },
                  "modes": {
                    "bubble": {
                      "distance": 250,
                      "duration": 2,
                      "opacity": 0,
                      "size": 0
                    },
                    "grab": {
                      "distance": 400
                    },
                    "repulse": {
                      "distance": 400
                    }
                  }
                },
                "particles": {
                  "color": {
                    "value": "#229ED9"
                  },
                  "move": {
                    "attract": {
                      "rotate": {
                        "x": 600,
                        "y": 600
                      }
                    },
                    "enable": true,
                    "path": {},
                    "outModes": {
                      "bottom": "out",
                      "left": "out",
                      "right": "out",
                      "top": "out"
                    },
                    "random": true,
                    "speed": .5,
                    "spin": {}
                  },
                  "number": {
                    "density": {
                      "enable": true
                    },
                    "value": 160
                  },
                  "opacity": {
                    "random": {
                      "enable": true
                    },
                    "value": {
                      "min": 0,
                      "max": 1
                    },
                    "animation": {
                      "enable": true,
                      "speed": 1,
                      "minimumValue": 0
                    }
                  },
                  "size": {
                    "random": {
                      "enable": true
                    },
                    "value": {
                      "min": 1,
                      "max": 3
                    },
                    "animation": {
                      "speed": 4,
                      "minimumValue": 0.3
                    }
                  }
                }
              }}/>
        </div>
    )
}

export default ParticleBackground