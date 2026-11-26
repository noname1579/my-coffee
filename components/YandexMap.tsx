"use client"

import { useEffect, useRef } from "react"

export default function YandexMap({ apiKey }: { apiKey: string }) {
  const mapRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  const mapElement = mapRef.current
  if (!mapElement) return

  if (!apiKey) {
    console.error("ошибка API :/")
    return
  }

  if (window.ymaps && window.ymaps.Map) {
    initMap()
    return
  }

  const scriptId = "yandex-maps-script"

  if (document.getElementById(scriptId)) {
    const checkLoaded = () => {
      if (window.ymaps && window.ymaps.Map) {
        initMap()
      } else {
        setTimeout(checkLoaded, 100)
      }
    }
    checkLoaded()
    return
  }

  const script = document.createElement("script")
  script.id = scriptId
  script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`
  script.async = true
  script.onload = () => initMap()
  document.head.appendChild(script)

  function initMap() {
    try {
      window.ymaps.ready(() => {
        if (!mapElement) return
        new window.ymaps.Map(mapElement, {
          center: [47.2236, 39.7183],
          zoom: 16,
          controls: ["zoomControl", "fullscreenControl"],
        }).geoObjects.add(
          new window.ymaps.Placemark(
            [47.2236, 39.7183],
            {
              hintContent: "My coffee",
              balloonContent: "My coffee — Красноармейская 11",
            },
            { preset: "islands#redDotIcon" }
          )
        )
      })
    } catch (error) {
      console.error("ошибка:", error)
    }
  }

  return () => {
    if (mapElement) {
      mapElement.innerHTML = ""
    }
  }
}, [apiKey])

  return (
    <div className="w-full h-full">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  )
}