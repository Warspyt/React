import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={150}
      height={150}
      fill="none"
      viewBox="0 0 150 150"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M39.2 92.26l3.252-4.897V66.379c-1.322.188-2.67.292-4.043.292-1.373 0-2.722-.104-4.044-.292v26.093h4.442c.159 0 .305-.08.392-.213zM34.365 62.903v.049a25.18 25.18 0 004.044.33c1.376 0 2.726-.116 4.043-.33v-.05c11.92-1.933 21.022-12.27 21.022-24.736 0-13.843-11.222-25.065-25.065-25.065-13.844 0-25.066 11.222-25.066 25.065 0 12.466 9.102 22.802 21.022 24.737zm4.044-42.496c9.808 0 17.759 7.951 17.759 17.76 0 9.807-7.951 17.758-17.76 17.758-9.808 0-17.758-7.95-17.758-17.759 0-9.808 7.95-17.759 17.759-17.759z"
        fill="#BCFFFA"
        fillOpacity={0.98}
      />
      <path
        d="M36.149 40.068v-8.797h3.213a3.216 3.216 0 013.212 3.213 3.216 3.216 0 01-3.212 3.213v4.743c4.387 0 7.956-3.57 7.956-7.956 0-4.388-3.569-7.957-7.956-7.957h-7.957v23.278h4.744v-9.737zM111.931 93.725l-11.488-17.057a8.483 8.483 0 00-7.035-3.743H60.68a8.483 8.483 0 00-7.035 3.743L51.98 79.14l-9.53 14.349-.422.636a3.84 3.84 0 01-3.222 1.737h-4.442v.011h-2.8c-3.499 0-6.639 2.15-7.906 5.411l-5.887 15.151c-1.258 3.239 1.132 6.732 4.607 6.732h14.74c0 7.585 6.149 13.733 13.734 13.733s13.733-6.148 13.733-13.733h24.916c0 7.585 6.148 13.733 13.733 13.733 7.585 0 13.734-6.148 13.734-13.733h14.74c3.476 0 5.866-3.493 4.607-6.732l-5.886-15.151a8.483 8.483 0 00-7.907-5.41h-6.556a4.867 4.867 0 01-4.036-2.148zm-61.078 35.64a6.2 6.2 0 110-12.4 6.2 6.2 0 010 12.4zm22.41-35.861a2.194 2.194 0 01-2.195 2.194H55.533c-2.078 0-3.355-2.273-2.275-4.047l5.8-9.529a5.037 5.037 0 014.301-2.417h7.71c1.212 0 2.194.983 2.194 2.195v11.604zm9.757 2.194a2.194 2.194 0 01-2.194-2.194V81.9c0-1.212.982-2.195 2.194-2.195h7.71c1.757 0 3.387.916 4.3 2.417l5.801 9.529c1.08 1.774-.198 4.047-2.275 4.047H83.02zm20.216 33.667a6.2 6.2 0 110-12.4 6.2 6.2 0 010 12.4z"
        fill="#BCFFFA"
        fillOpacity={0.98}
      />
    </svg>
  )
}

export default SvgComponent
