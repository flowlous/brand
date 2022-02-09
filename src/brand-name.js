
import React from 'react'

export function BrandName ({ className, ...props}) {

  return (
    <svg viewBox='0 0 279 61' fill='none' xmlns='http://www.w3.org/2000/svg' className={className} {...props} >
      <path 
        fill='currentColor'
        d='M7.04899 60V26.002L3.04452 25.4414C2.37711 25.3079 1.82983 25.0676 1.40268 24.7206C1.00224 24.3735 0.802013 
        23.8796 0.802013 23.2389V19.715H7.04899V17.7928C7.04899 15.577 7.39605 13.468 8.09016 11.4658C8.78426 9.46354 9.82543 
        7.70157 11.2136 6.17987C12.6286 4.65817 14.3905 3.44348 16.4995 2.5358C18.6353 1.62812 21.1447 1.17428 24.028 1.17428C26.1904 
        1.17428 28.246 1.25437 30.1949 1.41455C32.1437 1.57473 34.0792 1.66817 36.0013 1.69486H41.7277V60H33.1982V7.70157C31.7566 7.64818 
        30.3417 7.58144 28.9535 7.50135C27.5652 7.42126 26.3639 7.38122 25.3494 7.38122C22.1459 7.38122 19.6764 8.2889 17.9412 10.1043C16.2326 
        11.9196 15.3783 14.4825 15.3783 17.7928V19.715H25.5096V25.9219H15.6586V60H7.04899ZM66.8808 18.5137C69.8975 18.5137 72.6206 19.0075 75.05 
        19.9953C77.506 20.9831 79.5884 22.3846 81.2969 24.2C83.0322 26.0154 84.367 28.2178 85.3014 30.8074C86.2358 33.3969 86.703 36.3069 86.703 
        39.5371C86.703 42.7674 86.2358 45.6773 85.3014 48.2669C84.367 50.8565 83.0322 53.0723 81.2969 54.9143C79.5884 56.7297 77.506 58.1312 75.05 
        59.119C72.6206 60.1068 69.8975 60.6007 66.8808 60.6007C63.8374 60.6007 61.0877 60.1068 58.6316 59.119C56.2022 58.1312 54.1199 56.7297 
        52.3846 54.9143C50.6494 53.0723 49.3145 50.8565 48.3802 48.2669C47.4458 45.6773 46.9786 42.7674 46.9786 39.5371C46.9786 36.3069 47.4458 
        33.3969 48.3802 30.8074C49.3145 28.2178 50.6494 26.0154 52.3846 24.2C54.1199 22.3846 56.2022 20.9831 58.6316 19.9953C61.0877 19.0075 63.8374 
        18.5137 66.8808 18.5137ZM66.8808 53.8732C70.5649 53.8732 73.3013 52.6451 75.09 50.189C76.9054 47.7063 77.813 44.169 77.813 39.5772C77.813 34.9854 
        76.9054 31.4481 75.09 28.9653C73.3013 26.4559 70.5649 25.2011 66.8808 25.2011C63.1433 25.2011 60.3669 26.4559 58.5515 28.9653C56.7362 31.4481 55.8285 
        34.9854 55.8285 39.5772C55.8285 44.169 56.7362 47.7063 58.5515 50.189C60.3669 52.6451 63.1433 53.8732 66.8808 53.8732ZM148.53 19.1544L135.436 60H128.588C127.787
         60 127.226 59.4794 126.906 58.4383L118.777 33.0098C118.563 32.289 118.363 31.5682 118.176 30.8474C118.016 30.1266 117.869 29.4192 117.736 28.7251C117.442 30.1667 
         117.082 31.6083 116.655 33.0499L108.405 58.4383C108.112 59.4794 107.484 60 106.523 60H99.996L86.9013 19.1544H93.7089C94.3763 19.1544 94.9236 19.3279 95.3508 
         19.6749C95.8046 19.9953 96.0983 20.3824 96.2317 20.8362L103.039 44.6228C103.306 45.7174 103.533 46.7852 103.72 47.8264C103.934 48.8409 104.121 49.8553 104.281 
         50.8698C104.548 49.8553 104.828 48.8409 105.122 47.8264C105.415 46.7852 105.722 45.7174 106.043 44.6228L113.691 20.7161C113.825 20.2356 114.092 19.8485 114.492 
         19.5548C114.919 19.2345 115.427 19.0743 116.014 19.0743H119.778C120.392 19.0743 120.913 19.2345 121.34 19.5548C121.767 19.8485 122.047 20.2356 122.181 20.7161L129.629 
         44.6228C129.949 45.7174 130.243 46.7852 130.51 47.8264C130.804 48.8676 131.071 49.9087 131.311 50.9499C131.498 49.9354 131.698 48.9076 131.912 47.8664C132.125 46.8253 132.379 
         45.7441 132.672 44.6228L139.6 20.8362C139.76 20.3557 140.054 19.9553 140.481 19.6349C140.908 19.3145 141.429 19.1544 142.043 19.1544H148.53ZM160.377 
         0.733792V60H151.768V0.733792H160.377ZM185.46 18.5137C188.477 18.5137 191.2 19.0075 193.629 19.9953C196.085 20.9831 198.168 22.3846 199.876 24.2C201.612 26.0154 202.946 28.2178 203.881 
         30.8074C204.815 33.3969 205.282 36.3069 205.282 39.5371C205.282 42.7674 204.815 45.6773 203.881 48.2669C202.946 50.8565 201.612 53.0723 199.876 54.9143C198.168 56.7297 196.085 58.1312 
         193.629 59.119C191.2 60.1068 188.477 60.6007 185.46 60.6007C182.417 60.6007 179.667 60.1068 177.211 59.119C174.782 58.1312 172.699 56.7297 170.964 54.9143C169.229 53.0723 167.894 50.8565 
         166.96 48.2669C166.025 45.6773 165.558 42.7674 165.558 39.5371C165.558 36.3069 166.025 33.3969 166.96 30.8074C167.894 28.2178 169.229 26.0154 170.964 24.2C172.699 22.3846 174.782 20.9831 
         177.211 19.9953C179.667 19.0075 182.417 18.5137 185.46 18.5137ZM185.46 53.8732C189.144 53.8732 191.881 52.6451 193.669 50.189C195.485 47.7063 196.392 44.169 196.392 39.5772C196.392 34.9854 
         195.485 31.4481 193.669 28.9653C191.881 26.4559 189.144 25.2011 185.46 25.2011C181.723 25.2011 178.946 26.4559 177.131 28.9653C175.316 31.4481 174.408 34.9854 174.408 39.5772C174.408 44.169 
         175.316 47.7063 177.131 50.189C178.946 52.6451 181.723 53.8732 185.46 53.8732ZM244.79 19.1544V60H239.584C238.436 60 237.702 59.4527 237.381 58.3582L236.741 54.5539C235.886 55.4616 234.979 
         56.2892 234.018 57.0367C233.083 57.7842 232.082 58.4249 231.014 58.9588C229.946 59.4928 228.798 59.9066 227.57 60.2002C226.369 60.4939 225.074 60.6407 223.686 60.6407C221.443 60.6407 219.468 
         60.267 217.759 59.5195C216.051 58.772 214.609 57.7174 213.435 56.3559C212.287 54.9944 211.419 53.3659 210.832 51.4705C210.244 49.5483 209.951 47.4393 209.951 45.1434V19.1544H218.56V45.1434C218.56 
         47.8931 219.188 50.0289 220.442 51.5506C221.724 53.0723 223.659 53.8331 226.249 53.8331C228.144 53.8331 229.906 53.406 231.535 52.5517C233.19 51.6707 234.738 50.4694 236.18 
         48.9477V19.1544H244.79ZM276.429 26.5626C276.215 26.9364 275.975 27.2034 275.708 27.3635C275.441 27.5237 275.107 27.6038 274.707 27.6038C274.253 27.6038 273.759 27.4703 273.225 27.2034C272.691 26.9097 272.064 26.5893 
         271.343 26.2423C270.622 25.8952 269.768 25.5882 268.78 25.3213C267.819 25.0276 266.684 24.8808 265.376 24.8808C264.308 24.8808 263.334 25.0142 262.453 25.2812C261.599 25.5215 260.865 25.8819 260.251 
         26.3624C259.663 26.8163 259.209 27.3635 258.889 28.0043C258.569 28.6183 258.409 29.2857 258.409 30.0065C258.409 30.9676 258.702 31.7685 259.29 32.4092C259.877 33.0499 260.651 33.6105 261.612 34.0911C262.573 
         34.5449 263.668 34.9587 264.896 35.3324C266.124 35.7062 267.379 36.1066 268.66 36.5338C269.941 36.9609 271.196 37.4548 272.424 38.0154C273.652 38.5761 274.747 39.2702 275.708 40.0978C276.669 40.8987 277.443 
         41.8864 278.03 43.0611C278.618 44.209 278.911 45.6106 278.911 47.2658C278.911 49.1879 278.564 50.9632 277.87 52.5917C277.176 54.2202 276.162 55.6351 274.827 56.8365C273.492 58.0378 271.824 58.9722 269.821 
         59.6396C267.846 60.307 265.577 60.6407 263.014 60.6407C261.599 60.6407 260.224 60.5072 258.889 60.2403C257.581 60 256.326 59.6663 255.125 59.2391C253.95 58.7853 252.842 58.2514 251.801 57.6374C250.787 57.0233 
         249.879 56.3559 249.078 55.6351L251.08 52.3515C251.321 51.951 251.614 51.644 251.961 51.4304C252.335 51.1902 252.789 51.07 253.323 51.07C253.883 51.07 254.431 51.2569 254.965 51.6307C255.525 51.9777 256.166 52.3648 
         256.887 52.7919C257.634 53.2191 258.529 53.6195 259.57 53.9933C260.611 54.3403 261.906 54.5139 263.454 54.5139C264.736 54.5139 265.844 54.367 266.778 54.0734C267.712 53.753 268.486 53.3259 269.1 52.7919C269.715 
         52.258 270.168 51.6573 270.462 50.9899C270.756 50.2958 270.902 49.5617 270.902 48.7875C270.902 47.7463 270.609 46.892 270.022 46.2246C269.434 45.5572 268.647 44.9832 267.659 44.5027C266.698 44.0221 265.59 
         43.595 264.335 43.2213C263.107 42.8475 261.852 42.4471 260.571 42.0199C259.29 41.5928 258.021 41.0989 256.767 40.5383C255.539 39.9776 254.431 39.2702 253.443 38.4159C252.482 37.5349 251.708 36.4804 251.12 
         35.2524C250.533 33.9976 250.239 32.4759 250.239 30.6873C250.239 29.0588 250.56 27.5104 251.2 26.0421C251.868 24.5738 252.829 23.279 254.084 22.1577C255.365 21.0365 256.927 20.1555 258.769 19.5148C260.638 
         18.8474 262.787 18.5137 265.216 18.5137C267.966 18.5137 270.462 18.9541 272.705 19.8351C274.947 20.7161 276.829 21.9175 278.351 23.4392L276.429 26.5626Z'
         />
    </svg>    
  )
}