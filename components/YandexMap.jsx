"use client"

import { useEffect, useRef } from "react";

export default function YandexMap({ apiKey }) {
  const mapRef = useRef(null)

  useEffect(() => {
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
      return;
    }

    const script = document.createElement("script")
    script.id = scriptId
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`
    script.async = true

    script.onload = () => {
      initMap()
    }

    document.head.appendChild(script);

    function initMap() {
      try {
        window.ymaps.ready(() => {
          new window.ymaps.Map(mapRef.current, {
            center: [47.226001, 39.700002],
            zoom: 12,
            controls: ["zoomControl", "fullscreenControl"]
          }).geoObjects.add(
            new window.ymaps.Placemark([47.226001, 39.700002], {
              hintContent: "Наша кофейня",
              balloonContent: "My Coffee"
            }, {
              preset: "islands#redDotIcon"
            })
          );
        });
      } catch (error) {
        console.error("ошибка:", error);
      }
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = ""
      }
    }
  }, [apiKey])

  return (
    <div className="w-full h-[500px]">
      <div 
        ref={mapRef} 
        className="w-full h-full"
      />
    </div>
  )
}