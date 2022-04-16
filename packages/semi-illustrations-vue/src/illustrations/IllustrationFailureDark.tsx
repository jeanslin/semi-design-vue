import { defineComponent, h } from 'vue';
const SvgComponent = defineComponent((props, { slots }) => {
    return () => (
        <svg
            width={200}
            height={200}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // @ts-ignore
            focusable={false}
            aria-hidden={true}
            {...props}
        >
            <path
                d="M74.6945 78.5971C95.4839 72.2791 132.255 66.3388 146.512 68.7372C150.724 69.4458 154.634 70.7175 157.866 72.1577C157.359 70.4741 156.922 68.6566 156.489 66.8527L156.448 66.6825C155.421 62.4112 154.4 58.2421 152.504 56.1349C147.707 50.8052 153.17 46.0085 153.17 46.0085L154.103 35.4824C167.122 40.3019 175.754 50.4026 181.108 60.5645C185.672 69.2258 187.855 77.9316 188.346 83.4495C189.412 95.4412 180.166 102.314 169.159 102.314C159.413 102.314 150.786 100.666 144.339 99.2005C144.98 101.392 149.781 118.389 151.866 131.867L105.716 132.446L98.1449 117.77L93.4778 105.512C74.0242 112.973 42.7127 124.531 28.5891 123.955C18.2301 123.532 12.9026 108.266 11.143 95.2553C10.6845 91.8657 10.4683 88.6291 10.4683 85.8477C10.4683 80.2052 10.7717 73.6731 12.6894 67.9647C13.4334 65.7498 14.4204 63.659 15.7269 61.7922C16.9565 60.0356 18.4689 58.4773 20.3281 57.2008C20.3281 61.198 19.3098 70.7362 23.1262 71.3244C28.1864 72.1043 33.5349 62.2411 36.9833 64.2626C40.8474 66.5277 35.3258 80.5958 35.6509 81.4508C35.9231 82.1664 36.1759 82.8601 36.4104 83.5324C37.5817 86.8911 38.2939 89.7163 38.6576 92.0756C46.5871 87.5622 60.0082 83.0603 74.6945 78.5971Z"
                fill="#C6CACD"
            />
            <path
                d="M181.108 60.5645C185.672 69.2258 187.855 77.9316 188.346 83.4495C189.412 95.4412 180.166 102.314 169.159 102.314C159.413 102.314 150.786 100.666 144.339 99.2005M181.108 60.5645C175.754 50.4026 167.122 40.3019 154.103 35.4824L153.17 46.0085C153.17 46.0085 147.707 50.8052 152.504 56.1349C154.4 58.2421 155.421 62.4112 156.448 66.6825M181.108 60.5645C175.103 60.1928 162.792 61.3608 156.448 66.6825M156.448 66.6825C158.018 73.2144 159.604 79.9851 164.362 79.9851C171.557 79.9851 160.769 71.1355 146.512 68.7372C132.255 66.3388 95.484 72.2791 74.6945 78.5971C53.905 84.9151 35.6509 91.3107 31.9202 97.7063C28.2867 103.935 45.161 108.625 36.4104 83.5324M36.4104 83.5324C36.1759 82.8601 35.9231 82.1664 35.6509 81.4508C35.3258 80.5958 40.8474 66.5277 36.9833 64.2626C33.5349 62.2411 28.1864 72.1043 23.1262 71.3244C19.3098 70.7362 20.3281 61.198 20.3281 57.2008C18.4689 58.4773 16.9565 60.0356 15.7269 61.7922M36.4104 83.5324C29.1364 85.1114 14.492 91.6352 11.143 95.2553M11.143 95.2553C10.6845 91.8657 10.4683 88.6291 10.4683 85.8477C10.4683 80.2052 10.7717 73.6731 12.6894 67.9647M11.143 95.2553C12.9026 108.266 18.2301 123.532 28.5891 123.955C42.7127 124.531 74.0242 112.973 93.4778 105.512L98.1449 117.77L105.716 132.446L151.866 131.867C149.781 118.389 144.98 101.392 144.339 99.2005M15.7269 61.7922C14.751 64.8033 14.6477 67.2964 15.9164 69.6006M15.7269 61.7922C14.4204 63.659 13.4334 65.7498 12.6894 67.9647M12.6894 67.9647C12.4743 70.251 13.5042 71.7417 13.9379 72.1754M144.339 99.2005C143.437 96.1158 141.222 89.2459 139.579 86.4441"
                stroke="#1C1F23"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M156.886 15.6635C156.889 15.6655 156.892 15.6675 156.895 15.6694L154.853 43.6243L157.424 71.7204C149.908 68.6545 144.101 67.3796 130.172 68.3571C118.232 69.195 98.4166 72.3051 83.9432 75.9798C67.2807 80.2494 46.1256 87.6177 38.7295 91.8869C37.9607 87.2425 35.8112 81.7331 35.8112 81.7331C35.7398 81.0211 38.4386 73.411 38.5392 68.6689C38.623 65.5893 37.6296 64.2205 36.2146 63.9156C35.5008 63.7618 34.6366 64.0333 34.1582 64.2721C33.5302 64.5937 33.3032 64.7492 32.7834 65.1113C31.4392 66.0896 30.3967 67.1284 28.8341 68.4514C27.6134 69.4848 26.636 70.1847 25.792 70.6207C24.2909 71.3961 23.3074 71.318 22.9033 71.2526C22.2719 71.1503 21.6892 70.7758 21.1886 69.666C21.1674 69.3713 21.1442 69.0718 21.1193 68.7801C20.6255 62.99 18.4213 48.6609 18.4214 33.8683C18.4214 26.1301 20.0343 23.8312 21.1193 22.2846C21.1622 22.2235 21.2044 22.1634 21.2455 22.1043C25.0978 16.5684 34.9239 15.3518 44.3664 15.1365C46.8631 15.0004 49.564 14.9482 52.4725 14.968L52.5842 15.1235L52.8205 15.1259L53.1466 15.1292C52.9787 15.1486 52.8069 15.1685 52.6313 15.189L70.9466 40.6766L67.3313 54.7626L77.5346 70.7448L74.6887 54.2499L84.6806 42.2632L81.1884 14.5595C81.1884 14.5595 89.9655 14.0685 100.655 12.7885C111.345 11.5086 119.134 10.882 130.077 10.9619C131.718 10.9738 133.489 11.0515 135.314 11.1843C144.953 11.8258 153.864 13.7374 156.769 15.587C156.812 15.6135 156.854 15.6401 156.895 15.6667C156.892 15.6656 156.889 15.6646 156.886 15.6635Z"
                fill="var(--semi-color-primary)"
                fill-opacity={0.2}
            />
            <path
                d="M143.006 27.9117C143.257 27.1899 144.046 26.8085 144.768 27.0597C145.27 27.2347 145.754 27.4704 146.211 27.7733C146.848 28.1953 147.023 29.0539 146.601 29.6911C146.179 30.3284 145.32 30.5029 144.683 30.0809C144.424 29.9097 144.15 29.7752 143.858 29.6736C143.136 29.4224 142.755 28.6336 143.006 27.9117Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M140.651 28.1241C140.861 28.859 140.436 29.6249 139.701 29.8349C139.339 29.9384 138.968 30.0601 138.589 30.1985C137.872 30.4609 137.077 30.0917 136.815 29.3739C136.552 28.656 136.921 27.8614 137.639 27.599C138.073 27.4403 138.508 27.2974 138.94 27.1737C139.675 26.9637 140.441 27.3892 140.651 28.1241Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M134.738 30.4002C135.114 31.0657 134.879 31.9099 134.213 32.2857C133.856 32.4877 133.498 32.6955 133.142 32.9074C132.485 33.2982 131.636 33.0827 131.245 32.4259C130.854 31.7691 131.07 30.9198 131.727 30.529C132.099 30.3075 132.474 30.0891 132.852 29.8756C133.518 29.4998 134.362 29.7347 134.738 30.4002Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M97.857 31.4286H97.9477C98.176 31.4286 98.4008 31.4311 98.6222 31.436C99.3863 31.4531 99.9919 32.0863 99.9748 32.8504C99.9578 33.6145 99.3245 34.2201 98.5604 34.2031C98.3904 34.1993 98.2177 34.1971 98.0424 34.1965C97.8692 34.222 97.6757 34.2587 97.4693 34.3079C96.7259 34.4852 95.9795 34.0263 95.8022 33.2829C95.6249 32.5394 96.0838 31.793 96.8272 31.6157C97.1575 31.5369 97.4748 31.4789 97.7671 31.4404L97.857 31.4286Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M147.776 31.7459C148.508 31.5238 149.281 31.9366 149.503 32.6679C149.632 33.095 149.748 33.5455 149.849 34.0201C150.008 34.7675 149.532 35.5027 148.784 35.6622C148.037 35.8217 147.302 35.345 147.142 34.5976C147.056 34.1931 146.96 33.8186 146.854 33.4721C146.632 32.7408 147.045 31.9679 147.776 31.7459Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M102.274 33.1252C102.459 32.3836 103.21 31.9323 103.951 32.1171C104.404 32.2299 104.838 32.3539 105.255 32.4869C105.983 32.7191 106.385 33.4977 106.153 34.2258C105.92 34.954 105.142 35.356 104.414 35.1237C104.052 35.0083 103.676 34.9007 103.282 34.8027C102.541 34.6179 102.089 33.8668 102.274 33.1252Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M129.301 33.6794C129.722 34.3173 129.546 35.1757 128.908 35.5967L128.382 35.9441L128.382 35.9444C128.199 36.0651 128.018 36.1846 127.848 36.2972C127.21 36.7181 126.352 36.5423 125.931 35.9044C125.51 35.2665 125.686 34.4081 126.323 33.9871L126.643 33.7763L126.853 33.6374L127.144 33.445L127.383 33.2868C128.021 32.8658 128.88 33.0416 129.301 33.6794Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M108.248 35.2153C108.615 34.5452 109.457 34.2997 110.127 34.6671C110.33 34.7786 110.544 34.8969 110.753 35.0125C110.921 35.1058 111.086 35.1973 111.24 35.2818C111.91 35.65 112.154 36.4915 111.786 37.1612C111.418 37.8309 110.576 38.0753 109.907 37.7071C109.731 37.6104 109.565 37.5188 109.401 37.4277L109.399 37.4266L109.397 37.4254C109.201 37.3169 109.006 37.2091 108.796 37.0941C108.126 36.7267 107.881 35.8855 108.248 35.2153Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M92.8287 35.7729C93.5929 35.7585 94.224 36.3663 94.2383 37.1305C94.2414 37.2925 94.2612 37.4734 94.3044 37.675C94.4646 38.4223 93.9886 39.158 93.2412 39.3181C92.4939 39.4783 91.7583 39.0023 91.5981 38.2549C91.52 37.8904 91.4777 37.5326 91.4711 37.1825C91.4568 36.4184 92.0646 35.7872 92.8287 35.7729Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M124.009 37.1958C124.314 37.8966 123.993 38.712 123.292 39.0169C123.038 39.1273 122.78 39.225 122.524 39.297C122.301 39.3598 122.082 39.4185 121.865 39.473C121.124 39.66 120.372 39.2108 120.185 38.4698C119.998 37.7287 120.447 36.9764 121.188 36.7894C121.379 36.7412 121.574 36.6891 121.774 36.633C121.875 36.6044 122.012 36.5556 122.188 36.479C122.889 36.1741 123.704 36.495 124.009 37.1958Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M113.893 38.1413C114.051 37.3936 114.786 36.916 115.533 37.0745C115.883 37.1488 116.247 37.2054 116.629 37.2411C117.39 37.3124 117.949 37.9871 117.878 38.748C117.806 39.509 117.132 40.0681 116.371 39.9968C115.881 39.9509 115.411 39.878 114.959 39.7821C114.212 39.6236 113.734 38.889 113.893 38.1413Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M148.977 37.9497C149.741 37.9374 150.371 38.5469 150.383 39.3111C150.387 39.5354 150.388 39.7633 150.388 39.9948C150.388 40.2382 150.385 40.4827 150.379 40.728C150.358 41.492 149.722 42.0947 148.958 42.0743C148.194 42.0538 147.591 41.4178 147.612 40.6538C147.618 40.4329 147.621 40.2131 147.621 39.9948C147.621 39.7778 147.619 39.5648 147.616 39.3557C147.603 38.5915 148.213 37.962 148.977 37.9497Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M148.6 44.8812C149.347 45.0436 149.82 45.7807 149.658 46.5276C149.555 47.0004 149.442 47.4729 149.318 47.944C149.124 48.6833 148.368 49.1255 147.629 48.9317C146.889 48.7379 146.447 47.9814 146.641 47.2421C146.755 46.8084 146.859 46.3738 146.953 45.9394C147.116 45.1925 147.853 44.7188 148.6 44.8812Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M146.688 51.5986C147.385 51.912 147.696 52.7312 147.383 53.4282C147.183 53.8718 146.975 54.3109 146.757 54.7444C146.414 55.4274 145.582 55.7028 144.899 55.3597C144.216 55.0166 143.941 54.1848 144.284 53.5019C144.484 53.1043 144.675 52.7011 144.859 52.2933C145.172 51.5962 145.991 51.2852 146.688 51.5986Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M41.6719 55.4537C41.74 56.2149 41.178 56.8872 40.4167 56.9552C39.9852 56.9937 39.565 57.0545 39.1574 57.1356C38.4078 57.2847 37.6792 56.7979 37.5301 56.0483C37.381 55.2987 37.8678 54.5701 38.6174 54.421C39.1226 54.3205 39.6408 54.2458 40.1704 54.1984C40.9317 54.1304 41.6039 54.6924 41.6719 55.4537Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M44.5848 55.7841C44.8011 55.0511 45.5706 54.6322 46.3037 54.8484C46.5471 54.9203 46.7914 54.9978 47.0364 55.0811C47.76 55.3271 48.1472 56.1131 47.9012 56.8368C47.6551 57.5604 46.8691 57.9475 46.1455 57.7015C45.9359 57.6302 45.7275 57.5641 45.5205 57.503C44.7874 57.2868 44.3685 56.5172 44.5848 55.7841Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M91.9044 56.8932C91.9543 57.6559 91.3766 58.3146 90.6139 58.3646C90.1657 58.3939 89.7249 58.4334 89.292 58.4831C88.5327 58.5703 87.8465 58.0254 87.7593 57.2661C87.6721 56.5068 88.2169 55.8206 88.9762 55.7334C89.4559 55.6783 89.9417 55.6349 90.433 55.6028C91.1956 55.5528 91.8544 56.1305 91.9044 56.8932Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M94.7218 56.9503C94.7869 56.1888 95.4569 55.6242 96.2185 55.6893C96.6917 55.7297 97.1683 55.7777 97.6481 55.8328C98.4074 55.9199 98.9523 56.6061 98.8651 57.3654C98.7779 58.1247 98.0917 58.6696 97.3324 58.5824C96.8782 58.5303 96.4283 58.485 95.9828 58.447C95.2213 58.3819 94.6567 57.7119 94.7218 56.9503Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M101.642 57.8316C101.8 57.0838 102.534 56.6053 103.282 56.7629C103.743 56.8601 104.206 56.9623 104.67 57.0694C105.415 57.2412 105.88 57.9841 105.708 58.7289C105.536 59.4736 104.793 59.9381 104.049 59.7664C103.6 59.6631 103.155 59.5646 102.711 59.4711C101.963 59.3135 101.485 58.5795 101.642 57.8316Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M34.8456 57.257C35.3267 57.8508 35.2354 58.7222 34.6416 59.2034C34.3175 59.4661 34.0176 59.7458 33.7434 60.0396C33.222 60.5984 32.3463 60.6287 31.7875 60.1073C31.2287 59.5859 31.1984 58.7102 31.7198 58.1514C32.0831 57.762 32.4772 57.3949 32.8991 57.0531C33.4929 56.5719 34.3644 56.6632 34.8456 57.257Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M85.0066 57.8988C85.2859 58.6102 84.9356 59.4133 84.2241 59.6926C84.0241 59.7711 83.827 59.8531 83.6327 59.9386C83.404 60.0392 83.1784 60.1399 82.9558 60.2406C82.2595 60.5558 81.4396 60.2467 81.1245 59.5504C80.8094 58.8541 81.1184 58.0342 81.8147 57.7191C82.0461 57.6144 82.2805 57.5098 82.518 57.4053C82.747 57.3045 82.9786 57.2082 83.2128 57.1163C83.9242 56.837 84.7273 57.1873 85.0066 57.8988Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M143.409 57.7635C144.014 58.2308 144.125 59.0998 143.658 59.7047C143.356 60.0956 143.044 60.4768 142.724 60.847C142.224 61.4248 141.35 61.4877 140.772 60.9874C140.194 60.4871 140.131 59.6132 140.631 59.0354C140.917 58.7052 141.196 58.364 141.468 58.0126C141.935 57.4078 142.804 57.2963 143.409 57.7635Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M108.429 59.4562C108.647 58.7238 109.418 58.3073 110.151 58.5258C110.601 58.6601 111.052 58.798 111.503 58.9394C112.233 59.1676 112.639 59.944 112.411 60.6734C112.182 61.4028 111.406 61.809 110.677 61.5807C110.236 61.443 109.797 61.3087 109.359 61.178C108.627 60.9594 108.21 60.1886 108.429 59.4562Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M115.076 61.5808C115.338 60.8627 116.132 60.4928 116.85 60.7545C117.291 60.9151 117.732 61.0783 118.172 61.2438C118.887 61.5127 119.249 62.3107 118.98 63.0261C118.712 63.7415 117.914 64.1035 117.198 63.8346C116.766 63.6723 116.334 63.5123 115.902 63.3549C115.184 63.0932 114.814 62.2989 115.076 61.5808Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M138.67 62.8884C139.091 63.5262 138.916 64.3846 138.278 64.8058C137.856 65.0846 137.424 65.3454 136.982 65.5867C136.311 65.9531 135.471 65.7063 135.104 65.0355C134.738 64.3648 134.985 63.524 135.655 63.1577C136.027 62.9547 136.393 62.7339 136.753 62.4963C137.391 62.0751 138.249 62.2507 138.67 62.8884Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M30.5071 62.7808C31.2682 62.8503 31.8288 63.5238 31.7592 64.2849C31.7415 64.4783 31.7326 64.673 31.7326 64.8689C31.7326 65.1235 31.7358 65.3751 31.7426 65.6235L30.1312 67.0263C29.4906 66.92 28.9942 66.3721 28.9759 65.6987C28.9684 65.4238 28.9648 65.1472 28.9648 64.8689C28.9648 64.5884 28.9777 64.3096 29.003 64.0329C29.0726 63.2718 29.746 62.7112 30.5071 62.7808Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M121.597 64.0665C121.891 63.361 122.702 63.0276 123.407 63.3218C123.624 63.412 123.84 63.5027 124.056 63.5938C124.259 63.6797 124.462 63.7605 124.663 63.8363C125.378 64.1058 125.74 64.9041 125.47 65.6193C125.201 66.3345 124.403 66.6958 123.687 66.4263C123.452 66.3377 123.216 66.2436 122.98 66.144C122.768 66.0544 122.555 65.9651 122.342 65.8763C121.636 65.5822 121.303 64.7719 121.597 64.0665Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M72.112 64.9418C72.5949 65.5342 72.506 66.4059 71.9136 66.8888C71.5343 67.1979 71.1718 67.505 70.8241 67.8096C70.2493 68.3133 69.375 68.2556 68.8713 67.6807C68.3676 67.1059 68.4253 66.2315 69.0002 65.7279C69.3717 65.4023 69.7593 65.074 70.165 64.7434C70.7574 64.2605 71.6291 64.3493 72.112 64.9418Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M132.406 65.9185C132.49 66.6781 131.942 67.362 131.183 67.446C130.677 67.5019 130.165 67.5323 129.647 67.536C128.882 67.5415 128.258 66.9264 128.253 66.1621C128.247 65.3978 128.863 64.7739 129.627 64.7684C130.05 64.7654 130.467 64.7405 130.878 64.6951C131.638 64.6111 132.322 65.1588 132.406 65.9185Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M66.6635 69.9035C67.2268 70.42 67.2648 71.2954 66.7483 71.8588C66.5005 72.1291 66.2595 72.3942 66.0206 72.6572L66.0159 72.6622L66.0147 72.6636L66.0136 72.6648L66.0026 72.6769L65.8396 72.8562L65.7555 72.9486C65.2412 73.5139 64.3659 73.5552 63.8006 73.0409C63.2353 72.5265 63.194 71.6513 63.7084 71.086L63.9623 70.8068C64.2046 70.5401 64.4537 70.2661 64.7082 69.9884C65.2247 69.425 66.1001 69.387 66.6635 69.9035Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M61.5962 75.2769C62.0467 75.8942 61.9115 76.7599 61.2942 77.2105C60.8648 77.5238 60.4152 77.8203 59.9388 78.0972C59.2781 78.4814 58.4311 78.2572 58.0469 77.5965C57.6627 76.9358 57.8869 76.0888 58.5476 75.7046C58.9359 75.4788 59.3055 75.2354 59.6625 74.9748C60.2799 74.5243 61.1456 74.6595 61.5962 75.2769Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M37.6691 75.9706C38.0867 76.1589 38.5348 76.3348 39.0157 76.4968C39.7399 76.7409 40.1292 77.5259 39.8852 78.2502C39.6411 78.9744 38.8561 79.3637 38.1318 79.1197C37.5698 78.9303 37.0365 78.7215 36.5311 78.4935C36.5767 78.3355 37.0282 76.6692 37.2482 75.8557C37.3901 75.871 37.532 75.9087 37.6691 75.9706Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M55.0501 78.5666C55.1708 79.3213 54.6569 80.0309 53.9022 80.1516C53.4091 80.2305 52.8957 80.2968 52.3599 80.3504C51.5994 80.4264 50.9213 79.8715 50.8453 79.111C50.7692 78.3505 51.3241 77.6724 52.0846 77.5964C52.5696 77.5479 53.0289 77.4884 53.465 77.4186C54.2197 77.2979 54.9294 77.8119 55.0501 78.5666Z"
                fill="var(--semi-color-primary)"
            />
            <path
                d="M43.4007 78.8694C43.461 78.1075 44.1276 77.5387 44.8895 77.5991C45.1407 77.619 45.3966 77.6366 45.6572 77.652C45.9083 77.6668 46.1551 77.6799 46.3977 77.6913C47.1612 77.7271 47.7511 78.375 47.7153 79.1384C47.6795 79.9019 47.0316 80.4918 46.2681 80.456C46.014 80.4441 45.756 80.4304 45.4941 80.4149C45.2155 80.3985 44.9411 80.3795 44.671 80.3582C43.9091 80.2978 43.3404 79.6313 43.4007 78.8694Z"
                fill="var(--semi-color-primary)"
            />
            <g clip-path="url(#clip0)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M30.9045 46.8694C28.9309 39.7229 33.1312 32.3059 40.2688 30.3361C47.4063 28.3663 54.8182 32.5787 56.7918 39.7252C59.4325 49.2872 52.025 69.0037 51.649 69.6235C51.5459 69.792 51.387 69.9063 51.21 69.9551C51.0331 70.0039 50.838 69.9874 50.6631 69.8956C50.0222 69.5564 33.5451 56.4314 30.9045 46.8694ZM45.2597 48.4085C42.0243 49.3014 38.6639 47.3918 37.7692 44.1521C36.8745 40.9124 38.7791 37.5498 42.0143 36.657C45.2496 35.7641 48.6101 37.6737 49.5048 40.9134C50.3995 44.153 48.495 47.5156 45.2597 48.4085Z"
                    fill="var(--semi-color-primary)"
                />
            </g>
            <path
                d="M102.315 100.689C99.5168 102.244 96.6807 103.536 92.95 105.268L94.4346 109.189C96.5664 108.23 100.589 103.162 102.315 100.689Z"
                fill="#1C1F23"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M120.997 63.0355C129.853 65.1334 133.432 56.5347 134.117 54.2696C134.801 52.0046 128.52 42.4111 126.122 43.0773C125.987 43.115 125.829 43.157 125.652 43.2038C125.593 43.2193 125.532 43.2355 125.469 43.2521L125.469 43.2521C125.081 43.3543 124.616 43.4769 124.097 43.623C120.463 44.6457 114.172 46.8222 113.124 51.2465C111.829 56.7149 115.529 61.7401 120.997 63.0355Z"
                fill="#1C1F23"
            />
            <path
                d="M134.496 64.7273C134.066 65.1978 133.296 65.4733 132.167 65.4633C131.049 65.4534 129.661 65.1618 128.113 64.6007C125.022 63.4797 121.389 61.3163 118.175 58.3814C114.923 55.4111 112.198 52.5779 110.583 49.9642C108.965 47.3474 108.529 45.0749 109.601 43.1176C110.147 42.1201 110.88 41.5274 111.71 41.2601C112.548 40.9902 113.536 41.0356 114.61 41.4129C116.767 42.1707 119.176 44.2399 121.092 47.4249C124.482 53.0614 127.976 55.6582 130.796 57.7547C131.276 58.1116 131.737 58.4539 132.174 58.7943C133.624 59.9228 134.451 61.1773 134.784 62.2682C135.12 63.3716 134.939 64.242 134.496 64.7273Z"
                fill="#C6CACD"
                stroke="#1C1F23"
            />
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x={101} y={47} width={30} height={22}>
                <path
                    d="M130.527 62.1043C130.034 58.7995 121.014 47.3532 114.449 47.0733L101.773 51.5945L108.238 65.7512L125.493 68.8184C127.335 67.682 130.921 64.7481 130.527 62.1043Z"
                    fill="#C4C4C4"
                />
            </mask>
            <g mask="url(#mask0)">
                <path
                    d="M127.206 63.6176C123.49 67.5601 117.328 67.7735 113.443 64.1122C109.559 60.4509 109.408 54.2873 113.124 50.3447C116.84 46.4022 123.002 46.1888 126.887 49.8501C130.771 53.5113 130.922 59.675 127.206 63.6176Z"
                    fill="#C6CACD"
                    stroke="#1C1F23"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M116.79 47.3517L116.774 47.7162C119.629 48.2226 125.342 50.307 125.347 54.593C125.353 59.9505 117.907 63.9254 110.882 58.0528C110.54 57.7671 110.224 57.5209 109.933 57.3112C109.986 59.9423 111.047 62.5402 113.1 64.4759C117.19 68.3305 123.668 68.0997 127.57 63.9603C131.471 59.821 131.319 53.3406 127.229 49.486C124.355 46.7768 120.301 46.0858 116.79 47.3517Z"
                    fill="#1C1F23"
                />
                <path
                    d="M119.341 55.001C119.649 54.6958 119.652 54.1984 119.347 53.89C119.042 53.5816 118.544 53.5789 118.236 53.8841C117.928 54.1892 117.925 54.6865 118.23 54.995C118.535 55.3034 119.032 55.3061 119.341 55.001Z"
                    fill="#1C1F23"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M119.983 50.7174C120.194 50.6309 120.435 50.7319 120.522 50.9431C121.053 52.239 121.979 53.2559 122.357 53.5862C122.529 53.7364 122.546 53.9974 122.396 54.1693C122.246 54.3411 121.985 54.3587 121.813 54.2085C121.361 53.8137 120.347 52.6964 119.757 51.2565C119.671 51.0453 119.772 50.804 119.983 50.7174Z"
                    fill="#1C1F23"
                />
                <path
                    d="M114.854 52.4072C115.163 52.1021 115.165 51.6047 114.86 51.2963C114.555 50.9878 114.058 50.9852 113.749 51.2903C113.441 51.5954 113.438 52.0928 113.743 52.4012C114.048 52.7097 114.546 52.7123 114.854 52.4072Z"
                    fill="#1C1F23"
                />
                <mask id="path-15-inside-1" fill="white">
                    <ellipse
                        rx={2.97818}
                        ry={2.97818}
                        transform="matrix(0.727696 0.6859 -0.685903 0.727693 128.435 60.0508)"
                    />
                </mask>
                <ellipse
                    rx={2.97818}
                    ry={2.97818}
                    transform="matrix(0.727696 0.6859 -0.685903 0.727693 128.435 60.0508)"
                    fill="#C6CACD"
                />
                <path
                    d="M128.419 60.0358C128.417 60.0376 128.417 60.0369 128.42 60.0352C128.422 60.0336 128.425 60.0321 128.427 60.031C128.43 60.0299 128.432 60.0294 128.433 60.0292C128.433 60.029 128.434 60.029 128.434 60.029C128.434 60.0289 128.435 60.0289 128.435 60.0291C128.436 60.0292 128.438 60.0296 128.441 60.0306C128.443 60.0315 128.446 60.0329 128.448 60.0343C128.451 60.0359 128.451 60.0366 128.45 60.0349L124.334 64.401C126.737 66.6656 130.52 66.5538 132.785 64.1512L128.419 60.0358ZM128.45 60.0349C128.448 60.0332 128.449 60.0336 128.45 60.036C128.452 60.0383 128.453 60.0409 128.454 60.0435C128.456 60.0459 128.456 60.0477 128.456 60.0487C128.456 60.0496 128.456 60.05 128.456 60.0501C128.456 60.0502 128.456 60.0506 128.456 60.0515C128.456 60.0525 128.456 60.0544 128.455 60.0569C128.454 60.0595 128.453 60.0622 128.451 60.0646C128.45 60.0671 128.449 60.0675 128.451 60.0657L124.084 55.9503C121.82 58.3529 121.932 62.1364 124.334 64.401L128.45 60.0349ZM128.451 60.0657C128.452 60.064 128.452 60.0646 128.449 60.0663C128.447 60.0679 128.444 60.0694 128.442 60.0706C128.439 60.0716 128.438 60.0721 128.437 60.0723C128.436 60.0726 128.435 60.0726 128.435 60.0726C128.435 60.0726 128.435 60.0726 128.434 60.0724C128.433 60.0723 128.431 60.0719 128.429 60.0709C128.426 60.07 128.423 60.0686 128.421 60.0672C128.418 60.0656 128.418 60.065 128.42 60.0666L132.535 55.7005C130.132 53.4359 126.349 53.5477 124.084 55.9503L128.451 60.0657ZM128.42 60.0666C128.421 60.0683 128.421 60.0679 128.419 60.0655C128.417 60.0632 128.416 60.0606 128.415 60.058C128.414 60.0556 128.413 60.0538 128.413 60.0528C128.413 60.0519 128.413 60.0515 128.413 60.0514C128.413 60.0513 128.413 60.0509 128.413 60.05C128.413 60.049 128.414 60.0472 128.414 60.0447C128.415 60.042 128.417 60.0393 128.418 60.037C128.42 60.0344 128.42 60.034 128.419 60.0358L132.785 64.1512C135.05 61.7486 134.938 57.9651 132.535 55.7005L128.42 60.0666Z"
                    fill="#1C1F23"
                    mask="url(#path-15-inside-1)"
                />
            </g>
            <path
                d="M145.633 40.1874C147.003 37.4426 158.385 42.5434 161.769 46.9709C165.153 51.3984 163.253 57.7137 159.877 56.6476C153.182 54.5328 152.309 49.9442 151.926 47.1724C150.728 45.3202 144.263 42.9321 145.633 40.1874Z"
                fill="#C6CACD"
                stroke="#1C1F23"
            />
            <path
                d="M158.953 41.5601L165.585 44.0819L167.246 56.5472L158.953 58.5334L155.478 46.5025L158.953 41.5601Z"
                fill="#C6CACD"
            />
            <path
                d="M167.294 151.936C172.49 153.599 190.654 187.511 186.347 187.511C172.49 187.511 151.857 188.044 114.93 188.044C99.2995 188.044 97.0306 182.885 103.144 165.959C105.182 160.317 107.367 154.779 109.281 150.198L141.777 151.462C141.352 152.994 140.87 154.528 140.405 155.866C143.074 154.942 146.051 154.393 149.128 154.393C154.397 154.393 156.169 155.783 160.898 154.393C163.03 153.766 165.695 151.424 167.294 151.936Z"
                fill="#C6CACD"
            />
            <path
                d="M140.405 155.866C140.87 154.528 141.352 152.994 141.777 151.462L109.281 150.198C107.367 154.779 105.182 160.317 103.144 165.959C97.0306 182.885 99.2995 188.044 114.93 188.044C151.857 188.044 172.49 187.511 186.347 187.511C190.654 187.511 172.49 153.599 167.294 151.936C165.695 151.424 163.03 153.766 160.898 154.393C156.169 155.783 154.397 154.393 149.128 154.393C146.051 154.393 143.074 154.942 140.405 155.866ZM140.405 155.866C139.621 158.251 138.523 160.879 135.957 164.246C134.264 166.467 131.971 168.678 130.53 168.578C129.089 168.477 129.114 165.396 130.53 162.924C132.503 159.477 136.984 157.05 140.405 155.866Z"
                stroke="#1C1F23"
            />
            <path
                d="M149.247 131.699C149.247 131.699 152.61 151.162 136.915 152.735C125.377 153.892 96.1395 148.188 83.1547 144.95C87.8724 157.773 92.7606 184.812 90.1473 187.111C86.8156 190.043 42.5977 188.866 34.1851 187.111C25.7725 185.357 48.0093 175.653 49.6412 172.455C52.6261 166.606 44.1627 151.274 43.8913 127C43.62 102.726 62.0732 102.141 78.3554 105.358C91.3813 107.932 119.993 123.688 130.919 132.216L149.247 131.699Z"
                fill="#C6CACD"
                stroke="#1C1F23"
            />
            <path
                d="M141.496 153.874C138.387 156.417 113.777 158.871 105.916 157.405L108.67 150.592C128.896 153.45 136.755 153.937 142.127 151.757L141.496 153.874Z"
                fill="#1C1F23"
            />
            <path d="M126.021 142.703C122.926 139.711 121.029 135.194 121.857 130.35" stroke="#1C1F23" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M130.605 95.6452C121.569 84.6667 111.631 75.9139 105.098 71.0903L106.734 68.874C113.435 73.8215 123.541 82.728 132.732 93.8946C141.911 105.048 150.267 118.563 153.317 132.725L150.624 133.305C147.705 119.752 139.651 106.637 130.605 95.6452Z"
                fill="#1C1F23"
            />
            <path
                d="M149.119 107.086L132.765 120.282L155.034 138.09L163.895 118.903C163.761 114.974 161.565 113.563 158.068 114.243L154.946 111.746C155.034 108.233 152.771 106.101 149.119 107.086Z"
                fill="#6B7075"
            />
            <path
                d="M148.24 128.619L157.693 114.284L154.779 111.954L143.843 125.021L148.24 128.619Z"
                stroke="#1C1F23"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M143.67 127.979C141.28 130.967 136.92 131.452 133.932 129.062C130.943 126.673 130.458 122.313 132.848 119.324C135.238 116.336 139.598 115.85 142.586 118.24C145.575 120.63 146.06 124.99 143.67 127.979ZM155.949 137.798C153.559 140.787 149.199 141.272 146.211 138.882C143.222 136.492 142.737 132.132 145.127 129.144C147.517 126.155 151.877 125.67 154.865 128.06C157.854 130.45 158.339 134.81 155.949 137.798Z"
                fill="#1C1F23"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M133.433 123.46L142.64 121.651L142.958 123.273L133.752 125.082L133.433 123.46Z"
                fill="#C6CACD"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M145.504 133.113L154.711 131.305L155.029 132.927L145.823 134.735L145.504 133.113Z"
                fill="#C6CACD"
            />
            <defs>
                <clip-path id="clip0">
                    <rect
                        width={44.4004}
                        height={44.4627}
                        fill="white"
                        transform="matrix(0.963965 -0.266028 0.266198 0.963918 18.4214 34.6221)"
                    />
                </clip-path>
            </defs>
        </svg>
    );
});
const IconComponent = defineComponent({
    name: 'IllustrationFailureDark',

    setup() {
        return () => <SvgComponent />;
    },
});
IconComponent.props = {};
export default IconComponent;
export { SvgComponent };
