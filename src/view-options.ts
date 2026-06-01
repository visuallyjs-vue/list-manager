import DefaultGroupComponent from "./components/DefaultGroupComponent.vue";
import DefaultNodeComponent from "./components/DefaultNodeComponent.vue";

import { type OverlayVisibility } from "@visuallyjs/browser-ui";

const viewOptions = {
    groups: {
        "list": {
            component: DefaultGroupComponent,
            layout: {
                type: "Column",
                options:{
                    padding:{
                        x:0,
                        y:0
                    }
                }
            },
            autoSize: true,
            elementsDraggable: false
        }
    },
    nodes: {
        "default": {
            component: DefaultNodeComponent
        }
    },
    edges: {
        "default": {
            targetMarker:"PlainArrow",
            deleteButton:"hover" as OverlayVisibility,
            paintStyle: {
                stroke: "#94a3b8",
                strokeWidth: 2,
                outlineWidth: 2,
                outlineStroke: "transparent"
            },
            hoverPaintStyle: {
                stroke: "#3b82f6",
                strokeWidth: 3
            }
        }
    }
}

export default viewOptions
