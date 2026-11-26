declare global {
  interface Window {
    ymaps: {
      Map: new (element: HTMLElement, options: {
        center: [number, number]
        zoom: number
        controls: string[]
      }) => {
        geoObjects: {
          add: (placemark: unknown) => void
        }
      }
      Placemark: new (
        coords: [number, number],
        properties?: Record<string, string>,
        options?: Record<string, string>
      ) => unknown
      ready: (callback: () => void) => void
    }
  }
}

export {}