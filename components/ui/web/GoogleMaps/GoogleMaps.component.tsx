import { useEffect, useMemo, useRef, useState, RefObject } from "react";
import { StyleSheet, View, Animated } from "react-native";

/* * LandPin * @description Es el pin o marcador color verde con animación (en el suelo) * @method LandPin * @param isBeingDragged * @returns React.JSX.Element */
const LandPin = (isBeingDragged: boolean) => {
  return (
    <Animated.View
      style={
        !isBeingDragged
          ? pinStyles.jumpedPinStyle
          : pinStyles.jumpedPinStyleHidden
      }
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // className={
        //   !isBeingDragged
        //     ? styles["google-maps_landed-pin"]
        //     : styles["google-maps_landed-pin--hidden"]
        // }
      >
        {" "}
        <circle cx="24" cy="22" r="6" fill="white"></circle>{" "}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25.202 45.598C28.922 42.386 40 31.986 40 22C40 17.7565 38.3143 13.6869 35.3137 10.6863C32.3131 7.68571 28.2435 6 24 6C19.7565 6 15.6869 7.68571 12.6863 10.6863C9.68571 13.6869 8 17.7565 8 22C8 31.986 19.078 42.386 22.798 45.598C23.1446 45.8586 23.5664 45.9995 24 45.9995C24.4336 45.9995 24.8554 45.8586 25.202 45.598ZM30 22C30 25.3137 27.3137 28 24 28C20.6863 28 18 25.3137 18 22C18 18.6863 20.6863 16 24 16C27.3137 16 30 18.6863 30 22Z"
          fill="#199E8F"
        ></path>{" "}
        <path
          d="M25.202 45.598L25.803 46.3973C25.821 46.3837 25.8385 46.3696 25.8555 46.3549L25.202 45.598ZM35.3137 10.6863L34.6066 11.3934L35.3137 10.6863ZM12.6863 10.6863L13.3934 11.3934L12.6863 10.6863ZM22.798 45.598L22.1445 46.3549C22.1615 46.3696 22.179 46.3837 22.197 46.3973L22.798 45.598ZM39 22C39 26.6558 36.3986 31.5314 33.2003 35.7336C30.0251 39.9054 26.3833 43.2569 24.5485 44.8411L25.8555 46.3549C27.7407 44.7271 31.4979 41.2726 34.7917 36.9449C38.0624 32.6476 41 27.3302 41 22H39ZM34.6066 11.3934C37.4196 14.2064 39 18.0218 39 22H41C41 17.4913 39.2089 13.1673 36.0208 9.97918L34.6066 11.3934ZM24 7C27.9782 7 31.7936 8.58035 34.6066 11.3934L36.0208 9.97918C32.8327 6.79107 28.5087 5 24 5V7ZM13.3934 11.3934C16.2064 8.58035 20.0218 7 24 7V5C19.4913 5 15.1673 6.79107 11.9792 9.97918L13.3934 11.3934ZM9 22C9 18.0218 10.5804 14.2064 13.3934 11.3934L11.9792 9.97918C8.79107 13.1673 7 17.4913 7 22H9ZM23.4515 44.8411C21.6167 43.2569 17.9749 39.9054 14.7997 35.7336C11.6014 31.5314 9 26.6558 9 22H7C7 27.3302 9.93757 32.6476 13.2083 36.9449C16.5021 41.2726 20.2593 44.7271 22.1445 46.3549L23.4515 44.8411ZM24 44.9995C23.7832 44.9995 23.5723 44.929 23.399 44.7987L22.197 46.3973C22.7168 46.7881 23.3496 46.9995 24 46.9995V44.9995ZM24.601 44.7987C24.4277 44.929 24.2168 44.9995 24 44.9995V46.9995C24.6504 46.9995 25.2832 46.7881 25.803 46.3973L24.601 44.7987ZM24 29C27.866 29 31 25.866 31 22H29C29 24.7614 26.7614 27 24 27V29ZM17 22C17 25.866 20.134 29 24 29V27C21.2386 27 19 24.7614 19 22H17ZM24 15C20.134 15 17 18.134 17 22H19C19 19.2386 21.2386 17 24 17V15ZM31 22C31 18.134 27.866 15 24 15V17C26.7614 17 29 19.2386 29 22H31Z"
          fill="#006576"
        ></path>{" "}
      </svg>
    </Animated.View>
  );
};
/* * JumpedPin * @description Es el pin o marcador color verde con animación (en el aire) * @method LandPin * @param isBeingDragged * @returns React.JSX.Element */
const JumpedPin = (isBeingDragged: boolean) => {
  return (
    <Animated.View
      style={
        isBeingDragged
          ? pinStyles.jumpedPinStyle
          : pinStyles.jumpedPinStyleHidden
      }
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="17" r="6" fill="white"></circle>{" "}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25.1269 40.598C28.6144 37.386 39 26.986 39 17C39 12.7565 37.4196 8.68687 34.6066 5.68629C31.7936 2.68571 27.9782 1 24 1C20.0218 1 16.2064 2.68571 13.3934 5.68629C10.5804 8.68687 9 12.7565 9 17C9 26.986 19.3856 37.386 22.8731 40.598C23.198 40.8586 23.5935 40.9995 24 40.9995C24.4065 40.9995 24.802 40.8586 25.1269 40.598ZM29.625 17C29.625 20.3137 27.1066 23 24 23C20.8934 23 18.375 20.3137 18.375 17C18.375 13.6863 20.8934 11 24 11C27.1066 11 29.625 13.6863 29.625 17Z"
          fill="#199E8F"
        ></path>{" "}
        <path
          d="M25.1269 40.598L25.7526 41.3781C25.7703 41.3638 25.7876 41.349 25.8043 41.3336L25.1269 40.598ZM34.6066 5.68629L33.8771 6.37023V6.37023L34.6066 5.68629ZM13.3934 5.68629L12.6639 5.00235L13.3934 5.68629ZM22.8731 40.598L22.1957 41.3336C22.2124 41.349 22.2297 41.3638 22.2474 41.3781L22.8731 40.598ZM38 17C38 21.6761 35.5525 26.5607 32.5572 30.7584C29.5811 34.9294 26.1681 38.2796 24.4494 39.8624L25.8043 41.3336C27.5732 39.7044 31.0967 36.2486 34.1853 31.9201C37.2547 27.6183 40 22.3099 40 17H38ZM33.8771 6.37023C36.5103 9.17906 38 13.0017 38 17H40C40 12.5114 38.329 8.19469 35.3361 5.00235L33.8771 6.37023ZM24 2C27.6914 2 31.2458 3.56359 33.8771 6.37023L35.3361 5.00235C32.3413 1.80783 28.2651 0 24 0V2ZM14.1229 6.37023C16.7542 3.56359 20.3086 2 24 2V0C19.7349 0 15.6587 1.80783 12.6639 5.00235L14.1229 6.37023ZM10 17C10 13.0017 11.4897 9.17906 14.1229 6.37023L12.6639 5.00235C9.67105 8.19469 8 12.5114 8 17H10ZM23.5506 39.8624C21.8319 38.2796 18.4189 34.9294 15.4428 30.7584C12.4475 26.5607 10 21.6761 10 17H8C8 22.3099 10.7453 27.6183 13.8147 31.9201C16.9033 36.2486 20.4268 39.7044 22.1957 41.3336L23.5506 39.8624ZM24 39.9995C23.827 39.9995 23.651 39.94 23.4988 39.8179L22.2474 41.3781C22.7451 41.7772 23.36 41.9995 24 41.9995V39.9995ZM24.5012 39.8179C24.349 39.94 24.173 39.9995 24 39.9995V41.9995C24.64 41.9995 25.2549 41.7772 25.7526 41.3781L24.5012 39.8179ZM24 24C27.7187 24 30.625 20.8042 30.625 17H28.625C28.625 19.8232 26.4945 22 24 22V24ZM17.375 17C17.375 20.8042 20.2813 24 24 24V22C21.5055 22 19.375 19.8232 19.375 17H17.375ZM24 10C20.2813 10 17.375 13.1958 17.375 17H19.375C19.375 14.1768 21.5055 12 24 12V10ZM30.625 17C30.625 13.1958 27.7187 10 24 10V12C26.4945 12 28.625 14.1768 28.625 17H30.625Z"
          fill="#006576"
        ></path>{" "}
        <ellipse cx="24" cy="47" rx="3" ry="1" fill="#212529"></ellipse>{" "}
      </svg>
    </Animated.View>
  );
};

export const getLocationFromUser = (): Promise<GeolocationCoordinates> => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(position.coords);
      }, reject);
    } else {
      reject("Geolocation not supported");
    }
  });
};

type PermissionState = "granted" | "prompt" | "denied" | null;

export const useGeolocationPermissions = () => {
  const [permissionState, setPermissionState] = useState<PermissionState>(null);

  useEffect(() => {
    const updatedPermissionsState = async () => {
      const result = await navigator.permissions.query({ name: "geolocation" });
      setPermissionState(result.state);

      result.onchange = () => {
        setPermissionState(result.state);
      };
    };

    updatedPermissionsState();
  });

  return permissionState;
};

// let geocodeLoadedLibrary: google.maps.GeocodingLibrary | null;
// let markerLibrary: google.maps.MarkerLibrary | null;
// let isApiLoaded: boolean;
// let useMockedData: boolean;

// export const useGeocoder = () => {
//   const geoCodeRef = useRef<google.maps.Geocoder | null>(null);
//   const [allMapsLibsLoading, setAllMapLibsLoading] = useState(true);

//   const geocoder = useMemo(() => {
//     if (isApiLoaded && geocodeLoadedLibrary && !geoCodeRef.current) {
//       return new geocodeLoadedLibrary.Geocoder();
//     }
//     return geoCodeRef.current;
//   }, [geocodeLoadedLibrary, isApiLoaded]);

//   useEffect(() => {
//     if (geocoder && !geoCodeRef.current && markerLibrary !== null) {
//       geoCodeRef.current = geocoder;
//       setAllMapLibsLoading(false);
//     }
//   }, [geocoder]);

//   return { geoCodeRef, allMapsLibsLoading, markerLibrary };
// };

// export const geocode = (
//   request: google.maps.GeocoderRequest,
//   geoCodeRef: RefObject<google.maps.Geocoder | null>,
//   getAddressCompleteReferences: (result: google.maps.GeocoderResponse) => void
// ) => {
//   const geocoder = geoCodeRef.current;
//   if (geocoder) {
//     if (!useMockedData) {
//       geocoder
//         .geocode(request)
//         .then((result) => {
//           getAddressCompleteReferences(result);
//         })
//         .catch((err) => {
//           console.error("Geocoder err: ", err);
//         });
//     } else {
//       const response = geocodingServiceMock;
//       getAddressCompleteReferences(response as any);
//     }
//   }
// };

// interface GoogleMapsComponentProps {
//   markerRef: (m: AdvancedMarkerRef) => void;

//   marker: google.maps.marker.AdvancedMarkerElement | null;

//   markerPosition: google.maps.LatLngLiteral | null;
//   onMarkerPosition: (markerPosition: google.maps.LatLngLiteral | null) => void;

//   center: google.maps.LatLngLiteral | null;
//   onSetCenter: (markerPosition: google.maps.LatLngLiteral | null) => void;

//   zoom: number | undefined;
//   setZoom: (zoom: number | undefined) => void;
// }

// const GoogleMapsComponent = ({
//   markerRef,
//   markerPosition,
//   onMarkerPosition,
//   center,
//   onSetCenter,
//   zoom,
//   setZoom,
// }: GoogleMapsComponentProps) => {
//   return (
//     <ApiProvider>
//       <Map
//         onZoomChanged={(e) => {
//           setZoom(e.map.getZoom());
//         }}
//       >
//         <AdvancedMarker
//           ref={markerRef}
//           position={markerPosition}
//         ></AdvancedMarker>
//       </Map>
//     </ApiProvider>
//   );
// };

// export { GoogleMapsComponent };

export { LandPin, JumpedPin };

const pinStyles = StyleSheet.create({
  jumpedPinStyle: {
    display: "flex",
  },
  jumpedPinStyleHidden: {
    display: "none",
  },
});
