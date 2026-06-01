### About this Demo

This is a **Template** Vue application showing a basic integration of **VisuallyJS**.

### VisuallyJS Components Used

The demo utilizes several components from the `@visuallyjs/browser-ui-vue` package:

- **SurfaceProvider**: Provides the VisuallyJS context.
- **SurfaceComponent**: The main canvas for rendering nodes and edges.
- **ControlsComponent**: UI controls for the surface.
- **MiniviewComponent**: Displays a small navigation map.

### Component Options

The `SurfaceComponent` is configured with:

- **renderOptions**: Configures the basic rendering of the surface.
- **viewOptions**: Defines how vertices (nodes) are displayed.

### CSS Requirement

For the VisuallyJS components to render correctly, the standard VisuallyJS stylesheet must be included in the project. In this demo, it is imported in `src/index.css`:

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
```
