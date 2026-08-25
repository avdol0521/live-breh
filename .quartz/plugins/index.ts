import { componentRegistry } from "../../quartz/components/registry"

export { CanvasBackgroundStyle, CanvasColor, CanvasData, CanvasEdge, CanvasEnd, CanvasFileNode, CanvasGroupNode, CanvasLinkNode, CanvasNode, CanvasSide, CanvasTextNode, CanvasBody, CanvasFrame, CanvasPageOptions } from "./canvas-page"

export const plugins: Record<string, Record<string, (...args: unknown[]) => void>> = {
  "canvas-page": {
    CanvasPage: (...args: unknown[]) => { componentRegistry.setOptionOverrides("canvas-page", args[0] as Record<string, unknown>); },
  },
}

export const CanvasPage = plugins["canvas-page"].CanvasPage
