// Fallback Three.js implementation
class ThreeFallback {
    static init() {
        console.log("Three.js fallback activated");
        return {
            Scene: class Scene {},
            WebGLRenderer: class WebGLRenderer {
                constructor() { 
                    console.log("WebGL fallback renderer");
                }
                setSize() {}
                render() {}
            },
            PerspectiveCamera: class PerspectiveCamera {
                constructor() { this.position = { z: 0 }; }
            },
            Mesh: class Mesh {},
            BoxGeometry: class BoxGeometry {},
            MeshBasicMaterial: class MeshBasicMaterial {},
            DirectionalLight: class DirectionalLight {}
        };
    }
}
