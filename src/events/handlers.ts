import { EventHandler } from '@create-figma-plugin/utilities'

export interface CreateSwatchesEvent extends EventHandler {
  name: 'CREATE_SWATCHES'
  handler: (data: any) => void
}

export interface SwatchesCreatedEvent extends EventHandler {
  name: 'SWATCHES_CREATED'
  handler: () => void
}

export interface CreateRectanglesEvent extends EventHandler {
  name: 'CREATE_RECTANGLES'
  handler: (count: string) => void
}

export interface RectanglesCreatedEvent extends EventHandler {
  name: 'RECTANGLES_CREATED_EVENT'
  handler: () => void
}

export interface GetEnvironmentEvent extends EventHandler {
  name: 'GET_ENVIRONMENT'
  handler: () => void
}

export interface EnvironmentEvent extends EventHandler {
  name: 'ENVIRONMENT'
  handler: (data: any) => void
}

export interface ClosePluginEvent extends EventHandler {
  name: 'CLOSE_PLUGIN'
  handler: () => void
}

export interface CreateRectanglesHandler extends EventHandler {
  name: 'CREATE_RECTANGLES'
  handler: (count: number) => void
}

export interface CloseHandler extends EventHandler {
  name: 'CLOSE'
  handler: () => void
}
