import Link from '@ui/link/link'

export function LogoSymbol(): JSX.Element {
  return (
    <svg
      viewBox="0 0 33 31"
      className="fill-current text-brand-nebula w-8 h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.505 8.513a4.238 4.238 0 00-2.128 5.61l2.91 6.437.814-.98a7.91 7.91 0 001.7 1.04c.62.257 1.203.386 1.747.386.59 0 1.013-.091 1.27-.272a.87.87 0 00.408-.77.732.732 0 00-.136-.452 1.354 1.354 0 00-.408-.339 3.312 3.312 0 00-.613-.294 18.963 18.963 0 00-.839-.34l-1.836-.768a5.792 5.792 0 01-1.134-.589 4.825 4.825 0 01-.952-.882 4.459 4.459 0 01-.658-1.176 4.408 4.408 0 01-.227-1.448c0-.633.136-1.222.408-1.764a4.39 4.39 0 011.134-1.448 5.378 5.378 0 011.723-.996 6.603 6.603 0 012.223-.362c.846 0 1.7.159 2.562.475a6.312 6.312 0 012.335 1.494l-1.95 2.443a6.952 6.952 0 00-1.45-.792 4.002 4.002 0 00-1.497-.272c-.484 0-.862.083-1.134.25-.272.165-.408.414-.408.746 0 .347.189.618.567.814.393.181.93.4 1.61.656l1.79.701c.923.362 1.633.868 2.132 1.516.5.649.748 1.486.748 2.511 0 .619-.128 1.214-.385 1.787a4.394 4.394 0 01-1.134 1.516c-.483.422-1.08.762-1.791 1.018-.71.256-1.527.384-2.449.384a9.032 9.032 0 01-2.644-.415l1.972 4.363a4.256 4.256 0 005.623 2.123l14.097-6.342h-1.487l-1.134-5.836a32.143 32.143 0 01-.317-1.742c-.076-.588-.152-1.154-.227-1.697h-.09c-.076.543-.16 1.109-.25 1.697a22.058 22.058 0 01-.295 1.742l-1.088 5.836h-4.853L14.18 9.378h3.99l.817 6.424c.076.77.159 1.539.25 2.308.09.769.174 1.538.25 2.307h.09l.408-2.307.408-2.308 1.406-6.424h3.265l1.406 6.424a715.942 715.942 0 01.816 4.615h.09c.076-.784.16-1.56.25-2.33.091-.769.174-1.53.25-2.285l.816-6.424h.633l-3.11-6.879A4.256 4.256 0 0020.593.376L2.505 8.513zm29.074 5.854l-1.338 8.035.254-.115a4.238 4.238 0 002.128-5.61l-1.044-2.31z"
      />
    </svg>
  )
}

export default function Logo(): JSX.Element {
  return (
    <Link href="/" tabIndex={0} title="Spencer and Williams">
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 186 35"
        className="w-full h-auto max-w-[9rem] laptop:max-w-none laptop:w-48"
      >
        <path
          d="M35.626 16.36c-.672 0-1.38-.072-2.124-.216a6.047 6.047 0 01-1.944-.72l.108-2.736h1.908l.36 2.268c.54.18 1.11.27 1.71.27.564 0 .978-.15 1.242-.45.264-.312.396-.672.396-1.08 0-.432-.102-.768-.306-1.008-.192-.24-.516-.468-.972-.684l-.792-.378c-1.116-.528-1.968-1.104-2.556-1.728-.588-.624-.882-1.446-.882-2.466 0-1.104.408-1.968 1.224-2.592.828-.624 1.968-.936 3.42-.936.66 0 1.308.078 1.944.234.636.156 1.182.378 1.638.666l-.162 2.592h-1.872l-.324-2.142a2.979 2.979 0 00-1.116-.216c-.444 0-.828.144-1.152.432a1.334 1.334 0 00-.468 1.044c0 .444.126.792.378 1.044s.618.498 1.098.738l.9.432c.756.36 1.368.726 1.836 1.098.48.36.828.768 1.044 1.224.228.444.342.978.342 1.602a3.47 3.47 0 01-.54 1.908c-.348.552-.882.99-1.602 1.314-.72.324-1.632.486-2.736.486zM41.26 19.996v-.936l.81-.18c.011-.6.017-1.152.017-1.656.012-.492.018-.948.018-1.368v-4.752c0-.336-.006-.606-.018-.81a8.68 8.68 0 00-.018-.576c0-.18-.006-.39-.018-.63l-.972-.162v-.738l3.942-1.242.306.162.072.954c.732-.744 1.608-1.116 2.628-1.116.66 0 1.26.174 1.8.522.54.336.966.846 1.278 1.53.324.684.486 1.542.486 2.574 0 .984-.186 1.83-.558 2.538-.372.696-.858 1.236-1.458 1.62a3.473 3.473 0 01-1.89.558c-.48 0-.9-.078-1.26-.234a2.814 2.814 0 01-.954-.63v1.764l.036 1.602.954.27v.936H41.26zM46.37 8.728c-.156 0-.306.024-.45.072a2.034 2.034 0 00-.396.198v5.31c.24.168.522.252.846.252.48 0 .864-.24 1.152-.72.288-.492.432-1.248.432-2.268 0-1.032-.144-1.764-.432-2.196-.288-.432-.672-.648-1.152-.648zM57.186 7.918c-.276 0-.51.204-.702.612-.192.408-.3 1.17-.324 2.286h.846c.432 0 .72-.084.864-.252.156-.18.234-.498.234-.954 0-.624-.096-1.062-.288-1.314-.18-.252-.39-.378-.63-.378zm.054 8.37c-.9 0-1.704-.186-2.412-.558a4.167 4.167 0 01-1.656-1.602c-.408-.708-.612-1.554-.612-2.538 0-.78.138-1.458.414-2.034a4.157 4.157 0 011.116-1.44 4.71 4.71 0 011.566-.882 5.49 5.49 0 011.746-.288c.864 0 1.578.18 2.142.54a3.297 3.297 0 011.296 1.422c.288.588.432 1.248.432 1.98 0 .192-.006.36-.018.504a3.831 3.831 0 01-.072.45h-5.004c.096.876.354 1.512.774 1.908.432.396.912.594 1.44.594.456 0 .846-.078 1.17-.234.336-.168.63-.372.882-.612l.702.684c-.384.732-.912 1.266-1.584 1.602-.66.336-1.434.504-2.322.504zM62.053 16v-.918l.828-.198c.012-.432.018-.888.018-1.368v-2.412c0-.336-.006-.606-.018-.81a8.68 8.68 0 00-.018-.576c0-.18-.006-.39-.018-.63l-.972-.162v-.738l3.978-1.242.324.198.09 1.242c.492-.576.942-.96 1.35-1.152.42-.192.882-.288 1.386-.288.78 0 1.428.258 1.944.774.516.504.774 1.248.774 2.232v3.582c0 .492.006.954.018 1.386l.756.162V16h-4.986v-.918l.774-.18c.012-.432.018-.894.018-1.386v-3.33c0-.48-.066-.816-.198-1.008-.12-.204-.324-.306-.612-.306-.336 0-.726.156-1.17.468v4.194c0 .492.006.96.018 1.404l.684.144V16h-4.968zM77.859 16.288a5.264 5.264 0 01-2.286-.504 4.287 4.287 0 01-1.728-1.548c-.432-.684-.648-1.548-.648-2.592 0-.996.228-1.842.684-2.538a4.3 4.3 0 011.854-1.602c.78-.372 1.65-.558 2.61-.558.672 0 1.26.126 1.764.378s.9.588 1.188 1.008c.3.408.462.858.486 1.35-.228.696-.684 1.044-1.368 1.044-.372 0-.714-.144-1.026-.432-.312-.288-.486-.828-.522-1.62l-.036-.756h-.072c-.276 0-.57.108-.882.324-.3.204-.558.552-.774 1.044-.204.48-.306 1.134-.306 1.962 0 .996.21 1.764.63 2.304.432.528 1.008.792 1.728.792.396 0 .738-.078 1.026-.234.288-.168.558-.372.81-.612l.702.684c-.384.732-.906 1.266-1.566 1.602-.66.336-1.416.504-2.268.504zM87.069 7.918c-.276 0-.51.204-.702.612-.192.408-.3 1.17-.324 2.286h.846c.432 0 .72-.084.864-.252.156-.18.234-.498.234-.954 0-.624-.096-1.062-.288-1.314-.18-.252-.39-.378-.63-.378zm.054 8.37c-.9 0-1.704-.186-2.412-.558a4.167 4.167 0 01-1.656-1.602c-.408-.708-.612-1.554-.612-2.538 0-.78.138-1.458.414-2.034a4.157 4.157 0 011.116-1.44 4.71 4.71 0 011.566-.882 5.49 5.49 0 011.746-.288c.864 0 1.578.18 2.142.54a3.297 3.297 0 011.296 1.422c.288.588.432 1.248.432 1.98 0 .192-.006.36-.018.504a3.831 3.831 0 01-.072.45H86.06c.096.876.354 1.512.774 1.908.432.396.912.594 1.44.594.456 0 .846-.078 1.17-.234.336-.168.63-.372.882-.612l.702.684c-.384.732-.912 1.266-1.584 1.602-.66.336-1.434.504-2.322.504zM91.9 16v-.918l.863-.198c.012-.432.018-.888.018-1.368V11.086c0-.336-.006-.606-.018-.81 0-.204-.006-.39-.017-.558 0-.18-.006-.39-.018-.63l-.972-.162v-.738l3.978-1.242.324.198.143 2.088c.24-.78.583-1.356 1.027-1.728.456-.372.9-.558 1.332-.558.444 0 .816.132 1.115.396.313.252.498.654.558 1.206-.024.48-.168.858-.431 1.134a1.28 1.28 0 01-.937.396c-.551 0-1.055-.33-1.511-.99l-.09-.126c-.216.24-.432.552-.648.936-.204.384-.343.78-.415 1.188V13.444c0 .468.007.912.019 1.332l1.404.306V16H91.9zM104.051 7.774c.06.096.138.204.234.324.096.108.222.264.378.468.36-.492.6-.96.72-1.404.12-.444.18-.822.18-1.134 0-.36-.09-.648-.27-.864-.168-.216-.426-.324-.774-.324a.94.94 0 00-.774.36c-.18.228-.27.522-.27.882 0 .228.042.48.126.756.084.276.234.588.45.936zM111.413 16c-.48.108-.852.18-1.116.216a4.52 4.52 0 01-.81.072 5.003 5.003 0 01-1.512-.216c-.444-.144-.894-.402-1.35-.774l-.144-.108a.627.627 0 00-.126-.126c-.312.324-.738.612-1.278.864-.528.24-1.224.36-2.088.36-.828 0-1.512-.144-2.052-.432-.528-.288-.924-.666-1.188-1.134a3.162 3.162 0 01-.396-1.548c0-.648.204-1.242.612-1.782.408-.54 1.116-1.02 2.124-1.44a.512.512 0 01-.09-.108c-.396-.528-.666-1.02-.81-1.476a4.412 4.412 0 01-.216-1.332c0-.924.324-1.65.972-2.178.648-.54 1.518-.81 2.61-.81 1.044 0 1.848.216 2.412.648.576.42.864.984.864 1.692 0 .6-.216 1.116-.648 1.548-.42.432-1.092.828-2.016 1.188.168.18.354.384.558.612.216.228.462.498.738.81.3.324.57.618.81.882.252.252.48.492.684.72.24-.456.426-.888.558-1.296.144-.42.27-.894.378-1.422l-1.368-.234V8.35h4.104v.846l-1.206.198c-.24.684-.498 1.284-.774 1.8a13.017 13.017 0 01-1.044 1.62c.204.216.402.432.594.648l.63.666 1.764.414-.18 1.458zm-7.2-3.384c-.36-.456-.672-.84-.936-1.152a31.62 31.62 0 00-.648-.81 2.939 2.939 0 00-.468 1.638c0 .504.108.93.324 1.278.228.348.522.612.882.792.36.18.744.27 1.152.27.468 0 .858-.078 1.17-.234-.276-.3-.54-.606-.792-.918-.24-.312-.468-.6-.684-.864zM124.688 5.326V4.264h3.69v1.062l-1.368.234L123.77 16h-2.16l-2.304-7.722L116.984 16h-2.16L111.62 5.416l-.954-.09V4.264h5.868v1.062l-1.206.126 1.71 6.822 1.926-6.804-1.116-.144V4.264h5.598v1.062l-1.476.18 1.854 6.912 1.98-6.912-1.116-.18zM128.166 16v-.918l.81-.18c.012-.444.018-.906.018-1.386v-2.16c0-.492-.006-.9-.018-1.224 0-.336-.012-.684-.036-1.044l-.972-.162v-.738l4.176-1.242.324.198-.054 2.682v3.708c0 .492.006.954.018 1.386l.756.162V16h-5.022zm2.502-10.116a1.7 1.7 0 01-1.17-.432 1.46 1.46 0 01-.486-1.116c0-.456.162-.828.486-1.116a1.7 1.7 0 011.17-.432 1.7 1.7 0 011.17.432c.324.288.486.66.486 1.116 0 .444-.162.816-.486 1.116a1.7 1.7 0 01-1.17.432zM133.984 16v-.918l.81-.18c.012-.456.018-.906.018-1.35a49.3 49.3 0 00.018-1.332V4.822l-.972-.18v-.81l4.158-.81.306.198-.072 2.502V13.57l.036 1.35.81.162V16h-5.112zM139.996 16v-.918l.81-.18c.012-.456.018-.906.018-1.35a49.3 49.3 0 00.018-1.332V4.822l-.972-.18v-.81l4.158-.81.306.198-.072 2.502V13.57l.036 1.35.81.162V16h-5.112zM146.025 16v-.918l.81-.18c.012-.444.018-.906.018-1.386v-2.16c0-.492-.006-.9-.018-1.224 0-.336-.012-.684-.036-1.044l-.972-.162v-.738l4.176-1.242.324.198-.054 2.682v3.708c0 .492.006.954.018 1.386l.756.162V16h-5.022zm2.502-10.116a1.7 1.7 0 01-1.17-.432 1.46 1.46 0 01-.486-1.116c0-.456.162-.828.486-1.116a1.7 1.7 0 011.17-.432 1.7 1.7 0 011.17.432c.324.288.486.66.486 1.116 0 .444-.162.816-.486 1.116a1.7 1.7 0 01-1.17.432zM158.809 16.288c-.564 0-1.02-.108-1.368-.324a1.967 1.967 0 01-.738-.954 5.77 5.77 0 01-1.062.936c-.348.228-.846.342-1.494.342-.708 0-1.278-.204-1.71-.612-.42-.408-.63-.978-.63-1.71 0-.468.102-.882.306-1.242.216-.372.588-.708 1.116-1.008.54-.312 1.296-.594 2.268-.846l.504-.126c.192-.06.39-.114.594-.162v-.648c0-.768-.09-1.296-.27-1.584-.168-.288-.534-.432-1.098-.432h-.27v.612c0 .732-.15 1.254-.45 1.566-.3.3-.642.45-1.026.45-.732 0-1.188-.324-1.368-.972 0-.78.366-1.41 1.098-1.89.744-.492 1.842-.738 3.294-.738 1.248 0 2.124.276 2.628.828.516.54.774 1.428.774 2.664v4.122c0 .204.102.306.306.306a.387.387 0 00.216-.072c.072-.06.162-.168.27-.324l.522.288c-.216.552-.516.948-.9 1.188-.372.228-.876.342-1.512.342zm-3.906-2.88c0 .444.09.774.27.99.18.216.402.324.666.324a.771.771 0 00.27-.054c.108-.048.27-.144.486-.288v-2.952c-.18.048-.354.114-.522.198-.252.12-.51.324-.774.612s-.396.678-.396 1.17zM161.492 16v-.918l.828-.198c.012-.432.018-.888.018-1.368v-2.412-.81a8.68 8.68 0 00-.018-.576c0-.18-.012-.39-.036-.63l-.972-.162v-.738l3.978-1.242.324.198.09 1.242c.42-.504.84-.87 1.26-1.098.42-.228.894-.342 1.422-.342 1.272 0 2.1.522 2.484 1.566.504-.624.966-1.038 1.386-1.242.42-.216.876-.324 1.368-.324.984 0 1.686.27 2.106.81.432.54.648 1.338.648 2.394v3.384c0 .492.006.954.018 1.386l.756.162V16h-4.824v-.918l.684-.18c.012-.432.018-.894.018-1.386v-3.114c0-.612-.06-1.02-.18-1.224-.12-.204-.336-.306-.648-.306-.384 0-.768.144-1.152.432.012.096.018.198.018.306a3.1 3.1 0 01.018.342v3.582c0 .492.006.96.018 1.404l.684.144V16h-4.842v-.918l.774-.198c.012-.42.018-.876.018-1.368v-3.114c0-.552-.06-.942-.18-1.17-.108-.24-.336-.36-.684-.36-.18 0-.366.042-.558.126a2.928 2.928 0 00-.558.324v4.212c0 .492.006.96.018 1.404l.684.144V16h-4.968zM181.169 16.288c-1.248 0-2.352-.294-3.312-.882l.09-2.304h1.638l.288 1.872c.204.084.414.15.63.198.216.036.438.054.666.054.456 0 .81-.072 1.062-.216.252-.144.378-.384.378-.72a.895.895 0 00-.288-.648c-.18-.192-.57-.366-1.17-.522l-1.026-.27c-.708-.192-1.248-.528-1.62-1.008-.372-.492-.558-1.086-.558-1.782 0-.9.342-1.644 1.026-2.232.696-.588 1.692-.882 2.988-.882.552 0 1.062.06 1.53.18.48.12.966.3 1.458.54l-.144 2.034h-1.656l-.396-1.602a3.515 3.515 0 00-.396-.054 2.774 2.774 0 00-.486-.036 1.55 1.55 0 00-.864.234c-.228.144-.342.372-.342.684 0 .192.084.378.252.558.168.18.564.354 1.188.522l1.008.27c.84.228 1.44.582 1.8 1.062.372.48.558 1.074.558 1.782 0 1.056-.39 1.848-1.17 2.376-.768.528-1.812.792-3.132.792zM93.505 34h1.512v-5.292h4.5v-1.26h-4.5v-3.996h5.31v-1.26h-6.822V34zM107.62 29.194l.576-1.8c.414-1.314.792-2.61 1.17-3.978h.072c.378 1.368.756 2.664 1.17 3.978l.558 1.8h-3.546zM112.678 34h1.584l-3.996-11.808h-1.692L104.578 34h1.53l1.134-3.6h4.302l1.134 3.6zM119.484 32.47a5.685 5.685 0 004.122 1.746c2.484 0 4.032-1.494 4.032-3.366 0-1.746-1.062-2.556-2.43-3.15l-1.692-.72c-.918-.396-1.962-.828-1.962-1.962 0-1.062.882-1.728 2.214-1.728 1.08 0 1.962.432 2.682 1.116l.792-.972a4.825 4.825 0 00-3.474-1.458c-2.142 0-3.726 1.332-3.726 3.132 0 1.728 1.296 2.574 2.394 3.042l1.692.738c1.116.504 1.98.882 1.98 2.088 0 1.152-.918 1.926-2.466 1.926-1.242 0-2.412-.594-3.258-1.476l-.9 1.044zM134.357 34h1.512v-5.562h5.49V34h1.494V22.192h-1.494v4.95h-5.49v-4.95h-1.512V34zM150.511 34h1.512V22.192h-1.512V34zM164.026 34.216c2.952 0 5.04-2.376 5.04-6.174 0-3.762-2.088-6.066-5.04-6.066-2.97 0-5.058 2.286-5.058 6.066 0 3.798 2.088 6.174 5.058 6.174zm0-1.314c-2.124 0-3.51-1.908-3.51-4.86 0-2.934 1.386-4.752 3.51-4.752 2.106 0 3.492 1.818 3.492 4.752 0 2.952-1.386 4.86-3.492 4.86zM176.017 34h1.422v-6.174c0-1.242-.108-2.502-.18-3.69h.072l1.278 2.43L182.875 34h1.548V22.192h-1.422v6.102c0 1.242.126 2.574.198 3.762h-.072l-1.278-2.448-4.284-7.416h-1.548V34z"
          className="fill-current text-brand-black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.768 6.021A3 3 0 00.266 9.989l2.053 4.552.575-.692a5.58 5.58 0 001.2.736c.437.181.848.272 1.232.272.416 0 .715-.064.896-.192a.616.616 0 00.288-.544.518.518 0 00-.096-.32.956.956 0 00-.288-.24 2.333 2.333 0 00-.432-.208c-.17-.075-.368-.155-.592-.24l-1.296-.544a4.08 4.08 0 01-.8-.416 3.406 3.406 0 01-.672-.624 3.156 3.156 0 01-.464-.832c-.107-.31-.16-.651-.16-1.024 0-.448.096-.864.288-1.248.192-.395.459-.736.8-1.024a3.793 3.793 0 011.216-.704 4.65 4.65 0 011.568-.256c.597 0 1.2.112 1.808.336a4.452 4.452 0 011.648 1.056L7.662 9.56A4.904 4.904 0 006.638 9a2.819 2.819 0 00-1.056-.192c-.341 0-.608.058-.8.176a.579.579 0 00-.288.528c0 .245.133.437.4.576a18.1 18.1 0 001.136.464l1.264.496c.65.256 1.152.613 1.504 1.072.352.458.528 1.05.528 1.776 0 .437-.09.858-.272 1.264a3.107 3.107 0 01-.8 1.072 3.92 3.92 0 01-1.264.72c-.501.181-1.077.272-1.728.272a6.359 6.359 0 01-1.866-.294l1.392 3.086a3 3 0 003.968 1.501l9.947-4.485h-1.05l-.8-4.128c-.085-.406-.16-.816-.224-1.232a115.47 115.47 0 00-.16-1.2h-.064a82.47 82.47 0 01-.176 1.2c-.053.416-.122.826-.208 1.232l-.768 4.128H11.83l-1.824-10.4h2.816l.576 4.544c.053.544.112 1.088.176 1.632.064.544.123 1.088.176 1.632h.064l.288-1.632.288-1.632.992-4.544h2.304l.992 4.544a506.48 506.48 0 01.576 3.264h.064c.053-.555.112-1.104.176-1.648.064-.544.123-1.083.176-1.616l.576-4.544h.447l-2.194-4.865A3 3 0 0014.53.266L1.768 6.02zm20.515 4.14l-.944 5.683.18-.08a3 3 0 001.5-3.969l-.736-1.634z"
          className="fill-current text-brand-nebula"
        />
      </svg>
    </Link>
  )
}
