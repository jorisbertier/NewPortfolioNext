import React from 'react'
import RevealName from '../components/RevealName'
import { motion } from 'framer-motion'
import Stack from '../components/Stack'

export default function StackSection() {

    return (
        <div className='h-screen w-screen'>
            <RevealName name={'Stack .'} color={'#fff'}/>
                
            <div className='w-full mt-10 flex justify-evenly gap-8 text-center'>
                {/* Frontend */}
                <div className='flex flex-col'>
                    <h2 className="text-6xl font-bold mb-4">Front</h2>
                    <div className='flex flex-wrap justify-center h-auto gap-10 max-w-96'>
                    <Stack
                        gradient={'bg-gradient-to-br from-blue-300 to-purple-500'}
                        skew={12}
                        svg={<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"
                            fill='#fff'>
                            <path d="M20,23.474V31.5c0,0.828-0.672,1.5-1.5,1.5S17,32.328,17,31.5v-13c0-0.659,0.431-1.241,1.062-1.435 c0.627-0.19,1.314,0.049,1.682,0.596l0.249,0.37L20,18l15.234,22.546C40.524,36.947,44,30.88,44,24c0-11.046-8.954-20-20-20 S4,12.954,4,24s8.954,20,20,20c3.082,0,5.99-0.718,8.597-1.963L20,23.474z M28,16.5c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5 v12.79l-3-4.304V16.5z"></path>
                            </svg>}
                        startY={5}
                    />
                    <Stack
                        gradient={'bg-[linear-gradient(225.22deg,_#93ffff_-0.09%,_#59a5ff_100.01%)]'}
                        skew={12}
                        svg={<svg viewBox="-3.2 -3.2 38.40 38.40" fill="none" width={48} height={48} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-3.2" y="-3.2" width="38.40" height="38.40" rx="19.2" fill="#ffffff" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"></path> <path fillRule="evenodd" clipRule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"></path> </g></svg>}
                    />
                    <Stack
                        gradient={' bg-[linear-gradient(136.47deg,_#ffa7c1_-0.27%,_#ff5050_99.75%)]'}
                        skew={12}
                        svg={<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_angular</title><polygon points="16 2 16 2 16 2 2.966 6.648 4.954 23.882 16 30 16 30 16 30 27.046 23.882 29.034 6.648 16 2" fill="#dd0031"></polygon><polygon points="16 2 16 5.108 16 5.094 16 19.276 16 19.276 16 30 16 30 27.046 23.882 29.034 6.648 16 2" fill="#c3002f"></polygon><path d="M16,5.094,7.852,23.364H10.89l1.638-4.088h6.916l1.638,4.088H24.12L16,5.094Zm2.38,11.662H13.62L16,11.03Z" fill="#fff"></path></g></svg>}
                        startY={12}
                    />
                    <Stack
                        gradient={'bg-white'}
                        skew={12}
                        svg={<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                            <linearGradient id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1" x1="21.861" x2="25.703" y1="8.237" y2="36.552" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#009bb8"></stop><stop offset="1" stopColor="#009bb8"></stop></linearGradient><path fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)" d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"></path>
                            </svg>}
                        startY={7}
                    />
                                <Stack
                        gradient={'bg-gradient-to-br from-[#ffafed] to-[#7952b3]'}
                        skew={12}
                        svg={<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" width={48} height={48} preserveAspectRatio="xMinYMin meet" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M0 222.991C0 241.223 14.779 256 33.009 256H222.99C241.223 256 256 241.221 256 222.991V33.01C256 14.777 241.221 0 222.991 0H33.01C14.777 0 0 14.779 0 33.009V222.99z" fill="#563D7C"></path><path d="M106.158 113.238V76.985h31.911c3.04 0 5.97.253 8.792.76 2.822.506 5.319 1.41 7.49 2.713 2.17 1.303 3.907 3.112 5.21 5.427 1.302 2.316 1.954 5.283 1.954 8.9 0 6.513-1.954 11.217-5.862 14.111-3.907 2.895-8.9 4.342-14.979 4.342h-34.516zM72.075 50.5v155h75.112c6.947 0 13.713-.868 20.298-2.605 6.585-1.737 12.446-4.414 17.584-8.032 5.137-3.618 9.226-8.286 12.265-14.002 3.04-5.717 4.559-12.483 4.559-20.298 0-9.697-2.352-17.982-7.055-24.856-4.704-6.875-11.832-11.687-21.384-14.437 6.947-3.328 12.194-7.598 15.74-12.808 3.545-5.21 5.318-11.722 5.318-19.538 0-7.236-1.194-13.314-3.582-18.235-2.388-4.92-5.753-8.864-10.095-11.831-4.341-2.967-9.551-5.102-15.63-6.404-6.078-1.303-12.808-1.954-20.189-1.954H72.075zm34.083 128.515v-42.549h37.121c7.381 0 13.315 1.7 17.802 5.102 4.486 3.401 6.73 9.081 6.73 17.041 0 4.053-.688 7.381-2.063 9.986-1.375 2.605-3.22 4.668-5.536 6.187-2.315 1.52-4.993 2.605-8.032 3.257-3.04.65-6.223.976-9.552.976h-36.47z" fill="#FFF"></path></g></svg>}
                        startY={6}
                    />
                                <Stack
                        gradient={'bg-gradient-to-br from-[#ffb5b5] via-[#ff4fce] via-[#7952b3] to-[#4630eb]'}
                        skew={12}
                        svg={<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_scss2</title><path d="M16,2A14,14,0,1,1,2,16,14,14,0,0,1,16,2Z" fill="#c69"></path><path d="M24.782,7.992c-.634-2.486-4.757-3.3-8.659-1.918A19.605,19.605,0,0,0,9.479,9.885c-2.149,2.01-2.492,3.76-2.351,4.491.5,2.58,4.033,4.266,5.486,5.517V19.9c-.428.211-3.564,1.8-4.3,3.42-.774,1.712.123,2.94.718,3.105A4.4,4.4,0,0,0,13.78,24.5a4.824,4.824,0,0,0,.472-4.288,5.639,5.639,0,0,1,2.143-.123c2.456.287,2.938,1.82,2.846,2.462a1.62,1.62,0,0,1-.779,1.1c-.172.107-.225.143-.21.223.021.115.1.111.247.086a1.915,1.915,0,0,0,1.336-1.707c.059-1.5-1.382-3.186-3.934-3.143a6.736,6.736,0,0,0-2.189.3c-.035-.04-.071-.08-.108-.12-1.578-1.683-4.494-2.874-4.371-5.137.045-.823.331-2.989,5.6-5.617,4.32-2.153,7.778-1.56,8.376-.247.854,1.876-1.848,5.361-6.334,5.864a3.37,3.37,0,0,1-2.833-.718c-.236-.26-.271-.271-.359-.223-.143.079-.052.309,0,.445a2.659,2.659,0,0,0,1.621,1.274,8.592,8.592,0,0,0,5.258-.52C23.283,13.362,25.405,10.437,24.782,7.992ZM13.218,20.663a3.584,3.584,0,0,1-.029,2.092q-.035.106-.077.21t-.091.2a3.911,3.911,0,0,1-.647.943c-.813.887-1.95,1.223-2.437.94-.526-.305-.263-1.556.68-2.553a9.478,9.478,0,0,1,2.474-1.762l0,0Z" fill="#fff"></path></g></svg>}
                    />
                                <Stack
                        gradient={'bg-bgbrown'}
                        skew={12}
                        svg={<svg fill="#000000" height={40} width={48} viewBox="-2.4 -2.4 28.80 28.80" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#ffffff" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M0 20.084c.043.53.23 1.063.718 1.778.58.849 1.576 1.315 2.303.567.49-.505 5.794-9.776 8.35-13.29a.761.761 0 0 1 1.248 0c2.556 3.514 7.86 12.785 8.35 13.29.727.748 1.723.282 2.303-.567.57-.835.728-1.42.728-2.046 0-.426-8.26-15.798-9.092-17.078-.8-1.23-1.044-1.498-2.397-1.542h-1.032c-1.353.044-1.597.311-2.398 1.542C8.267 3.991.33 18.758 0 19.77z"></path></g></svg>}
                        startY={8}
                    />
                    </div>
                </div>

                {/* Backend */}
                <div>
                    <h2 className="text-6xl font-bold mb-4">Back</h2>
                    <div className='flex flex-wrap justify-center h-auto gap-10 max-w-96'>
                    <Stack
                        gradient={'bbg-gradient-to-br from-[#030] via-[#333333] to-[#ececec]'}
                        skew={12}
                        svg={<svg fill="#fff" width="50px" height="50px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Symfony icon</title><path d="M24 12c0 6.628-5.372 12-12 12S0 18.628 0 12 5.372 0 12 0s12 5.372 12 12zm-6.753-7.561c-1.22.042-2.283.715-3.075 1.644-.878 1.02-1.461 2.229-1.881 3.461-.753-.614-1.332-1.414-2.539-1.761-.966-.297-2.015-.105-2.813.514-.41.319-.71.757-.861 1.254-.36 1.176.381 2.225.719 2.6l.737.79c.15.154.519.56.339 1.138-.193.631-.951 1.037-1.732.799-.348-.106-.848-.366-.734-.73.045-.15.152-.263.21-.391.052-.11.077-.194.095-.242.141-.465-.053-1.07-.551-1.223-.465-.143-.939-.03-1.125.566-.209.68.117 1.913 1.86 2.449 2.04.628 3.765-.484 4.009-1.932.153-.907-.255-1.582-1.006-2.447l-.612-.677c-.371-.37-.497-1.002-.114-1.485.324-.409.785-.584 1.539-.379 1.103.3 1.594 1.063 2.412 1.68-.338 1.11-.56 2.223-.759 3.222l-.123.746c-.585 3.07-1.033 4.757-2.194 5.726-.234.166-.57.416-1.073.434-.266.005-.352-.176-.355-.257-.006-.184.15-.271.255-.353.154-.083.39-.224.372-.674-.016-.532-.456-.994-1.094-.973-.477.017-1.203.465-1.176 1.286.028.85.819 1.485 2.012 1.444.638-.021 2.062-.281 3.464-1.949 1.633-1.911 2.09-4.101 2.434-5.706l.383-2.116c.213.024.441.042.69.048 2.032.044 3.049-1.01 3.064-1.776.01-.464-.304-.921-.744-.91-.386.009-.718.278-.806.654-.094.428.646.813.068 1.189-.41.266-1.146.452-2.184.3l.188-1.042c.386-1.976.859-4.407 2.661-4.467.132-.007.612.006.623.323.003.105-.022.134-.147.375-.115.155-.174.345-.168.537.017.504.4.836.957.816.743-.023.955-.748.945-1.119-.032-.874-.952-1.424-2.17-1.386z"></path></g></svg>}
                    />
                    <Stack
                        gradient={'bg-[linear-gradient(45deg,_#89e3ff_29%,_#cfffb8_50%,_#ffe177_100%)]'}
                        skew={12}
                        svg={<svg viewBox="0 0 32 32" width={48} height={48} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#paint0_linear_87_8204)"></path> <path fillRule="evenodd" clipRule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#paint1_linear_87_8204)"></path> <defs> <linearGradient id="paint0_linear_87_8204" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse"> <stop stopColor="#327EBD"></stop> <stop offset="1" stopColor="#1565A7"></stop> </linearGradient> <linearGradient id="paint1_linear_87_8204" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse"> <stop stopColor="#FFDA4B"></stop> <stop offset="1" stopColor="#F9C600"></stop> </linearGradient> </defs> </g></svg>}
                    />
                    <Stack
                        gradient={'bg-gradient-to-br from-[#004E64] via-[#00A5CF] to-[#FFC857]'}
                        skew={12}
                        svg={<svg fill="#ffffff" height={48} width={48} viewBox="-6 -6 36.00 36.00" role="img" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.12000000000000002"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-6" y="-6" width="36.00" height="36.00" rx="18" fill="#6fa6b8" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>MySQL icon</title><path d="M16.405 5.676c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.87h-.927c-.03-1.562-.123-3.03-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01c-.103 1.323-.168 2.793-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008L4.25 13.34h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.79h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483h.88zM22.112 18.87h-2.63v-5.53h.885v4.85h1.745zM18.792 19.005l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.763c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zM13.842 17.338c0 .47-.172.856-.516 1.156s-.803.45-1.384.45c-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22.188-.147.3-.354.3-.615 0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476c-.36-.152-.715-.23-1.064-.23-.283 0-.502.068-.654.206-.153.136-.248.31-.248.524 0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zM23.224 11.486c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193-.194-.26-.435-.487-.695-.675-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395-.34-.295-.717-.582-1.104-.823-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514-.192-.368-.38-.775-.547-1.163-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133-.12-.12-.255-.267-.35-.4-.28-.377-.527-.79-.747-1.218-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303-.087-.124-.18-.285-.24-.427-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46.876.556 1.596 1.345 2.085 2.286.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"></path></g></svg>}
                    />
                    <Stack
                        gradient={'bg-gradient-to-br from-blue-300 to-purple-500'}
                        skew={12}
                        svg={<svg viewBox="-3.2 -3.2 38.40 38.40" width={48} height={48} xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-3.2" y="-3.2" width="38.40" height="38.40" rx="19.2" fill="#ffffff" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_prisma</title><path d="M25.21,24.21,12.739,27.928a.525.525,0,0,1-.667-.606L16.528,5.811a.43.43,0,0,1,.809-.094l8.249,17.661A.6.6,0,0,1,25.21,24.21Zm2.139-.878L17.8,2.883h0A1.531,1.531,0,0,0,16.491,2a1.513,1.513,0,0,0-1.4.729L4.736,19.648a1.592,1.592,0,0,0,.018,1.7l5.064,7.909a1.628,1.628,0,0,0,1.83.678l14.7-4.383a1.6,1.6,0,0,0,1-2.218Z" fill="#000000"></path></g></svg>}
                    />
                    </div>
                </div>

                {/* DevOps & Tools */}
                <div>
                    <h2 className="text-6xl font-bold mb-4">Tools</h2>
                    <div className='flex flex-wrap justify-center h-auto gap-10 max-w-96'>
                    <Stack
                        gradient={'bg-gradient-to-br from-blue-300 to-purple-500'}
                        skew={12}
                        startY={7}
                        svg={<svg viewBox="-10.88 -10.88 53.76 53.76" height={48} width={48} xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-10.88" y="-10.88" width="53.76" height="53.76" rx="26.88" fill="#ffffff" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_jest</title><path d="M27.089,15.786a2.606,2.606,0,0,0-2.606-2.606,2.633,2.633,0,0,0-.274.014l3.58-10.558H12.576l3.575,10.549c-.052,0-.105-.005-.158-.005a2.606,2.606,0,0,0-.791,5.09,11.383,11.383,0,0,1-2.049,2.579A10.436,10.436,0,0,1,9.5,23.116a3.323,3.323,0,0,1-1.665-4.23c.077-.18.155-.362.229-.544a2.607,2.607,0,1,0-2.09-.4,20.134,20.134,0,0,0-1.889,4.787c-.354,2.135,0,4.4,1.845,5.681,4.3,2.981,8.969-1.848,13.891-3.061,1.784-.44,3.742-.369,5.313-1.279a4.45,4.45,0,0,0,2.179-3.088,4.639,4.639,0,0,0-.831-3.522,2.6,2.6,0,0,0,.606-1.671ZM18.6,15.8v-.009a2.6,2.6,0,0,0-1.256-2.23L20.188,7.8l2.85,5.814a2.6,2.6,0,0,0-1.161,2.169c0,.019,0,.038,0,.057L18.6,15.8Z" fill="#c63d14"></path><path d="M27.726,15.786A3.247,3.247,0,0,0,25.083,12.6L28.677,2H11.689l3.6,10.621a3.241,3.241,0,0,0-1,5.918,10.865,10.865,0,0,1-1.568,1.846,9.827,9.827,0,0,1-3.16,2.03,2.656,2.656,0,0,1-1.134-3.28l.04-.093.074-.175a3.245,3.245,0,1,0-3.34-.754c-.108.231-.222.465-.339.706a14,14,0,0,0-1.4,3.8c-.465,2.8.285,5.043,2.111,6.308A5.751,5.751,0,0,0,8.934,30c2.132,0,4.289-1.071,6.4-2.119a23.672,23.672,0,0,1,4.642-1.918c.577-.142,1.171-.228,1.8-.319a9.977,9.977,0,0,0,3.68-1.028,5.09,5.09,0,0,0,2.487-3.53,5.255,5.255,0,0,0-.691-3.613,3.223,3.223,0,0,0,.475-1.688Zm-1.273,0a1.97,1.97,0,1,1-1.97-1.97,1.972,1.972,0,0,1,1.97,1.97ZM26.9,3.273l-3.174,9.36a3.2,3.2,0,0,0-.4.125l-3.135-6.4L17.046,12.72a3.2,3.2,0,0,0-.419-.114L13.464,3.273ZM15.993,13.816a1.97,1.97,0,1,1-1.97,1.97,1.972,1.972,0,0,1,1.97-1.97Zm-8.522.019A1.97,1.97,0,1,1,5.5,15.8a1.972,1.972,0,0,1,1.97-1.97Zm19.217,7.034a3.82,3.82,0,0,1-1.871,2.646,8.9,8.9,0,0,1-3.223.869c-.632.091-1.285.185-1.924.343a24.587,24.587,0,0,0-4.9,2.013c-3.164,1.571-5.9,2.928-8.472,1.143-1.887-1.308-1.8-3.728-1.58-5.054A12.82,12.82,0,0,1,6,19.376c.092-.189.182-.375.27-.559a3.215,3.215,0,0,0,.838.21,3.965,3.965,0,0,0,2.1,4.655l.245.126.259-.092a11.029,11.029,0,0,0,3.875-2.4,12.078,12.078,0,0,0,1.918-2.319,3.241,3.241,0,0,0,2.64-5.627l2.038-4.121,2.059,4.2a3.24,3.24,0,0,0,4.088,5,3.957,3.957,0,0,1,.355,2.422Z" fill="#fff"></path></g></svg>}
                    />
                    <Stack
                        gradient={'bg-gradient-to-br from-[#FFCB2B] via-[#FFA000] to-[#0C2233]'}
                        skew={12}
                        svg={<svg viewBox="-9.6 -9.6 51.20 51.20" xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-9.6" y="-9.6" width="51.20" height="51.20" rx="25.6" fill="#ffffff" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_firebase</title><path d="M5.8,24.6l.17-.237L13.99,9.149l.017-.161L10.472,2.348a.656.656,0,0,0-1.227.207Z" fill="#ffc24a"></path><path d="M5.9,24.42l.128-.25L13.965,9.114,10.439,2.448a.6.6,0,0,0-1.133.206Z"fill="#ffa712"></path><path d="M16.584,14.01l2.632-2.7L16.583,6.289a.678.678,0,0,0-1.195,0L13.981,8.971V9.2Z" fill="#f4bd62"></path><path d="M16.537,13.9l2.559-2.62L16.537,6.4a.589.589,0,0,0-1.074-.047L14.049,9.082l-.042.139Z" fill="#ffa50e"></path><polygon points="5.802 24.601 5.879 24.523 6.158 24.41 16.418 14.188 16.548 13.834 13.989 8.956 5.802 24.601" fill="#f6820c"></polygon><path d="M16.912,29.756,26.2,24.577,23.546,8.246A.635.635,0,0,0,22.471,7.9L5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0" fill="#fde068"></path><path d="M26.115,24.534,23.483,8.326a.557.557,0,0,0-.967-.353L5.9,24.569l9.131,5.1a1.912,1.912,0,0,0,1.863,0Z" fill="#fcca3f"></path><path d="M16.912,29.6a1.927,1.927,0,0,1-1.878,0L5.876,24.522,5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0L26.2,24.577l-.023-.14Z" fill="#eeab37"></path></g></svg>}
                        startY={5}
                    />
                    <Stack
                        gradient={'text-[#262840]'}
                        skew={12}
                        svg={<svg viewBox="0 0 32 32" height={48} width={48} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z" fill="#1ABCFE"></path> <path fillRule="evenodd" clipRule="evenodd" d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z" fill="#0ACF83"></path> <path fillRule="evenodd" clipRule="evenodd" d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z" fill="#FF7262"></path> <path fillRule="evenodd" clipRule="evenodd" d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z" fill="#F24E1E"></path> <path fillRule="evenodd" clipRule="evenodd" d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z" fill="#A259FF"></path> </g></svg>}
                        startY={8}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}
