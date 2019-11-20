import React from 'react';

const useGun = (Comp, config = null) => {
    return class createHoc extends React.Component {

        constructor(props) {
            super(props);
            this.loadScript1 = this.loadScript1.bind(this);
            this.loadScript2 = this.loadScript2.bind(this);
            this.loadScript3 = this.loadScript3.bind(this);
            this.loadScript4 = this.loadScript4.bind(this);
            this.loadScript5 = this.loadScript5.bind(this);
    this.loadscriptAndUpdateState = this.loadscriptAndUpdateState.bind(this);
            this.state = {
                scriptLoaded: null,
                GunReact: null,
                requesting: false
            }
        }

    
        loadscriptAndUpdateState() {
            this.setState(
              {
                scriptLoaded: new Promise(resolve => {
                  this.loadScript1(() => {
                    resolve();
                  });
                  this.loadScript2(() => {
                    resolve();
                  });
                  this.loadScript3(() => {
                    resolve();
                  });
                  this.loadScript4(() => {
                    resolve();
                  });
                  this.loadScript5(() => {
                    resolve();
                    fetch("/config.json")
                .then((res) => {
                    this.setState({ requesting: true });
                    let gunService = window.Gun({ localStorage: false, ...config })
                   
                    this.setState({ GunReact: gunService }, () => {
                        this.setState({ requesting: false })
                    });
                })
                  });
                })
              },
              () => {
                
              }
            );
          }

          loadScript1(callback) {
              
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/gun/gun.js";
            document.getElementsByTagName("head")[0].appendChild(script);
            if (script.readyState) {
              // IE
              script.onreadystatechange = () => {
                if (
                  script.readyState === "loaded" ||
                  script.readyState === "complete"
                ) {
                  script.onreadystatechange = null;
                  callback();
                }
              };
            } else {
              // Others
              script.onload = () => {
                callback();
              };
            }
          }
          componentDidUpdate(prevProps, prevState) {
            for (const index in prevProps) {
              if (prevState[index] !== this.state[index]) {
                this.loadscriptAndUpdateState()
              }
            }
          }
        
          static getDerivedStateFromProps(nextProps, prevState) {
            for (const index in nextProps) {
              if (nextProps[index] !== prevState[index]) {
                return {
                  scriptLoaded: null,
                  [index]: nextProps[index]
                }
              }
            }
        
            return null;
          }        

        componentDidMount() { 
            this.loadscriptAndUpdateState();
            this.state.scriptLoaded &&
      this.state.scriptLoaded.then(() => {
           
            
            });
        }

        loadScript2(callback) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/gun/lib/radix.js";
            document.getElementsByTagName("head")[0].appendChild(script);
            if (script.readyState) {
              // IE
              script.onreadystatechange = () => {
                if (
                  script.readyState === "loaded" ||
                  script.readyState === "complete"
                ) {
                  script.onreadystatechange = null;
                  callback();
                }
              };
            } else {
              // Others
              script.onload = () => {
                callback();
              };
            }
          }
          loadScript3(callback) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/gun/lib/radisk.js";
            document.getElementsByTagName("head")[0].appendChild(script);
            if (script.readyState) {
              // IE
              script.onreadystatechange = () => {
                if (
                  script.readyState === "loaded" ||
                  script.readyState === "complete"
                ) {
                  script.onreadystatechange = null;
                  callback();
                }
              };
            } else {
              // Others
              script.onload = () => {
                callback();
              };
            }
          }

          loadScript4(callback) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/gun/lib/store.js";
            document.getElementsByTagName("head")[0].appendChild(script);
            if (script.readyState) {
              // IE
              script.onreadystatechange = () => {
                if (
                  script.readyState === "loaded" ||
                  script.readyState === "complete"
                ) {
                  script.onreadystatechange = null;
                  callback();
                }
              };
            } else {
              // Others
              script.onload = () => {
                callback();
              };
            }
          }
          loadScript5(callback) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/gun/lib/rindexed.js";
            document.getElementsByTagName("head")[0].appendChild(script);
            if (script.readyState) {
              // IE
              script.onreadystatechange = () => {
                if (
                  script.readyState === "loaded" ||
                  script.readyState === "complete"
                ) {
                  script.onreadystatechange = null;
                  
                  callback();
                }
              };
            } else {
              // Others
              script.onload = () => {
                callback();
              };
            }
          }

        render() {
            let { requesting } = this.state;
            return (
                <div>
                   { (!requesting) && <Comp {...this.props} config={config}  gunService={this.state.GunReact}/>}
                </div>
            )
        }
    }

}
export default useGun;