import React, { CSSProperties } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Berkas = () => {
  const cardStyle: CSSProperties = {
    height: "650px",
    width: "250px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "0",
    backgroundColor: "#231F20",
    color: "#BFBFBF",
  };
  const svgStyle: CSSProperties = {
    width: "100%",  // Adjust the width as needed
    height: "100%",  // Adjust the height as needed
    display: "block",
  };

  return (
    <div>
      <div className="flex justify-center">
      <h1 className="text-2xl font-bold mb-4">Berkas</h1>
      </div>
    <div className="flex justify-around mx-4 sm:mx-8 p-4 sm:p-8 flex-wrap">
      <div className="mb-4">
        <Card style={cardStyle}>
          <CardHeader>
          <svg style= {svgStyle} fill="#BFBFBF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 43.916 43.916" xmlSpace="preserve" stroke="#BFBFBF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5 C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304 c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709 c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855 L9.208,16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416z M32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916z M32.708,22.416 h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"></path> </g> </g></svg><CardTitle className="text-center">Creative CV</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Format nama file: CV_Nama</p>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card style={cardStyle}>
          <CardHeader>
          <svg style= {svgStyle}fill="#BFBFBF" height="200px" width="200px" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-69 0 117 256" xmlSpace="preserve" stroke="#BFBFBF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M-10.9,4.9c11.3,0,20.5,9.2,20.5,20.5S0.4,45.9-10.9,45.9s-20.5-9.2-20.5-20.5S-22.2,4.9-10.9,4.9z M14.9,51.2h-51.2 c-14.2,0-25.6,11.4-25.6,25.6v62.6c0,4.9,3.9,9,9,9s9-3.9,9-9V81.9c0-1.4,1.2-2.6,2.6-2.6s2.6,1.2,2.6,2.6v155.2 c0,7.7,5.7,14,12.8,14s12.8-6.3,12.8-14v-88.5c0-1.4,1.2-2.6,2.6-2.6c1.4,0,2.6,1.2,2.6,2.6v88.5c0,7.7,5.7,14,12.8,14 c7.1,0,12.8-6.3,12.8-14V81.9c0-1.4,1.2-2.6,2.6-2.6s2.6,1.2,2.6,2.6v57.6c0,4.9,3.9,9,9,9s9-3.9,9-9V76.8 C40.5,62.6,28.8,51.2,14.9,51.2z"></path> </g></svg>
            <CardTitle className="text-center">Foto Full Body</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Kemeja bebas, celana Panjang (Laki-laki).</li>
              <li>
                Kemeja bebas, rok Panjang (Perempuan) Jika hijab menggunakan
                kerudung segi empat Jika non hijab rambut diikat rapi.
              </li>
            </ul>
          </CardContent>
          <CardFooter>Format nama file : Foto Full Body_Nama</CardFooter>
        </Card>
      </div>
      <div>
        <Card style={cardStyle}>
          <CardHeader>
<svg style={svgStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.54601 20.891L5 20H5L4.54601 20.891ZM4.10899 20.454L5 20H5L4.10899 20.454ZM4.04798 16.4656L5.03199 16.6437H5.03199L4.04798 16.4656ZM6.46558 14.048L6.64372 15.032H6.64372L6.46558 14.048ZM8.52682 14.4682L8.11418 15.3791L8.52682 14.4682ZM7.59797 14.0722L7.86945 13.1098L7.59797 14.0722ZM6.71575 14.0172L6.63976 13.0201L6.71575 14.0172ZM7.20361 14.0026L7.2779 13.0054L7.20361 14.0026ZM12.1655 15.9033C12.7101 15.8119 13.0776 15.2963 12.9862 14.7516C12.8948 14.2069 12.3792 13.8394 11.8345 13.9308L12.1655 15.9033ZM14 22C14.5523 22 15 21.5523 15 21C15 20.4477 14.5523 20 14 20V22ZM17.29 17.2929C16.8994 17.6834 16.8994 18.3166 17.29 18.7071C17.6805 19.0976 18.3137 19.0976 18.7042 18.7071L17.29 17.2929ZM15.0916 14.7507C14.954 15.2856 15.2759 15.8308 15.8108 15.9684C16.3457 16.1061 16.8908 15.7841 17.0285 15.2493L15.0916 14.7507ZM17.9971 20C17.4448 20 16.9971 20.4477 16.9971 21C16.9971 21.5523 17.4448 22 17.9971 22V20ZM18.0071 22C18.5594 22 19.0071 21.5523 19.0071 21C19.0071 20.4477 18.5594 20 18.0071 20V22ZM14 7C14 8.65685 12.6569 10 11 10V12C13.7614 12 16 9.76142 16 7H14ZM11 10C9.34315 10 8 8.65685 8 7H6C6 9.76142 8.23858 12 11 12V10ZM8 7C8 5.34315 9.34315 4 11 4V2C8.23858 2 6 4.23858 6 7H8ZM11 4C12.6569 4 14 5.34315 14 7H16C16 4.23858 13.7614 2 11 2V4ZM11 14C10.2634 14 9.5665 13.8413 8.93945 13.5573L8.11418 15.3791C8.99535 15.7783 9.97313 16 11 16V14ZM5 19.4V17.6841H3V19.4H5ZM5.6 20C5.30347 20 5.14122 19.9992 5.02463 19.9897C4.91972 19.9811 4.94249 19.9707 5 20L4.09202 21.782C4.36344 21.9203 4.63318 21.9644 4.86177 21.9831C5.07869 22.0008 5.33648 22 5.6 22V20ZM3 19.4C3 19.6635 2.99922 19.9213 3.01695 20.1382C3.03562 20.3668 3.07969 20.6366 3.21799 20.908L5 20C5.0293 20.0575 5.01887 20.0803 5.0103 19.9754C5.00078 19.8588 5 19.6965 5 19.4H3ZM5 20H5L3.21799 20.908C3.40973 21.2843 3.7157 21.5903 4.09202 21.782L5 20ZM5 17.6841C5 17.0048 5.00403 16.7982 5.03199 16.6437L3.06398 16.2874C2.99597 16.6631 3 17.0921 3 17.6841H5ZM6.63976 13.0201C6.52094 13.0291 6.40482 13.0427 6.28744 13.064L6.64372 15.032C6.68018 15.0254 6.72646 15.0192 6.79174 15.0143L6.63976 13.0201ZM5.03199 16.6437C5.18058 15.8229 5.82295 15.1806 6.64372 15.032L6.28744 13.064C4.6459 13.3612 3.36116 14.6459 3.06398 16.2874L5.03199 16.6437ZM8.93945 13.5573C8.46856 13.344 8.10859 13.1772 7.86945 13.1098L7.3265 15.0347C7.32059 15.033 7.33175 15.0359 7.36967 15.0506C7.40596 15.0646 7.45555 15.0851 7.52413 15.1147C7.66296 15.1747 7.84942 15.2591 8.11418 15.3791L8.93945 13.5573ZM6.79174 15.0143C7.02942 14.9962 7.06668 14.9952 7.12932 14.9999L7.2779 13.0054C7.03995 12.9877 6.85217 13.0039 6.63976 13.0201L6.79174 15.0143ZM7.86945 13.1098C7.65428 13.0491 7.50084 13.022 7.2779 13.0054L7.12932 14.9999C7.18838 15.0043 7.2134 15.0079 7.22908 15.0106C7.24475 15.0134 7.26949 15.0186 7.3265 15.0347L7.86945 13.1098ZM11.8345 13.9308C11.5638 13.9762 11.285 14 11 14V16C11.3964 16 11.7858 15.967 12.1655 15.9033L11.8345 13.9308ZM14 20H5.6V22H14V20ZM18.997 15.5C18.997 15.6732 18.9516 15.8053 18.6776 16.0697C18.5239 16.218 18.3429 16.3653 18.0919 16.574C17.8536 16.7723 17.5741 17.0087 17.29 17.2929L18.7042 18.7071C18.92 18.4913 19.1405 18.3033 19.3709 18.1116C19.5887 17.9305 19.8452 17.7223 20.0665 17.5087C20.5426 17.0493 20.997 16.4314 20.997 15.5H18.997ZM17.997 14.5C18.5493 14.5 18.997 14.9477 18.997 15.5H20.997C20.997 13.8431 19.6539 12.5 17.997 12.5V14.5ZM17.0285 15.2493C17.1396 14.8177 17.5325 14.5 17.997 14.5V12.5C16.5978 12.5 15.4246 13.457 15.0916 14.7507L17.0285 15.2493ZM17.9971 22H18.0071V20H17.9971V22Z" fill="#BFBFBF"></path> </g></svg>
            <CardTitle className="text-center">Deskripsi Diri</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Deskripsi diri seperti hobi dan lain-lain.</p>
          </CardContent>
          <CardFooter>
            <p>Format nama file : Deskripsi diri_Nama</p>
          </CardFooter>
        </Card>
      </div>
      <div>
        <Card style={cardStyle}>
          <CardHeader>
          <svg style={svgStyle} fill="#BFBFBF" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#BFBFBF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1801.441 0v1920H219.03v-439.216h-56.514c-31.196 0-56.515-25.299-56.515-56.47 0-31.172 25.319-56.47 56.515-56.47h56.514V1029.02h-56.514c-31.196 0-56.515-25.3-56.515-56.471 0-31.172 25.319-56.47 56.515-56.47h56.514V577.254h-56.514c-31.196 0-56.515-25.299-56.515-56.47 0-31.172 25.319-56.471 56.515-56.471h56.514V0h1582.412Zm-113.03 112.941H332.06v351.373h56.515c31.196 0 56.514 25.299 56.514 56.47 0 31.172-25.318 56.47-56.514 56.47H332.06v338.824h56.515c31.196 0 56.514 25.3 56.514 56.471 0 31.172-25.318 56.47-56.514 56.47H332.06v338.824h56.515c31.196 0 56.514 25.299 56.514 56.47 0 31.172-25.318 56.471-56.514 56.471H332.06v326.275h1356.353V112.94ZM640.289 425.201H1388.9v112.94H640.288v-112.94Zm0 214.83h639.439v112.94h-639.44v-112.94Zm0 534.845H1388.9v112.94H640.288v-112.94Zm0 214.83h639.439v112.94h-639.44v-112.94Z" fill-rule="evenodd"></path> </g></svg>
            <CardTitle className="text-center">Visi, Misi, dan Motivasi</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Visi, misi dan motivasi untuk mengikuti Cyber Academy.</p>
          </CardContent>
          <CardFooter>
            <p>Format nama file : Visi, Misi, dan Motivasi_Nama</p>
          </CardFooter>
        </Card>
      </div>
      <div>
        <Card style={cardStyle}>
          <CardHeader>
<svg style={svgStyle} fill="#BFBFBF" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 307.454 307.454" xmlSpace="preserve" stroke="#BFBFBF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="Layer_5_29_"> <g> <g> <g> <path d="M241.19,200.541c0,2.691-2.201,4.895-4.893,4.895H71.158c-2.693,0-4.895-2.203-4.895-4.895v-3.261 c0-2.691,2.201-4.894,4.895-4.894h165.139c2.691,0,4.893,2.202,4.893,4.894L241.19,200.541L241.19,200.541z"></path> </g> <g> <path d="M140.219,64.99c0,2.69-2.201,4.893-4.895,4.893H71.158c-2.693,0-4.895-2.202-4.895-4.893v-3.263 c0-2.691,2.201-4.894,4.895-4.894h64.166c2.693,0,4.895,2.202,4.895,4.894V64.99z"></path> </g> <g> <path d="M238.713,245.727c0,2.69-2.203,4.892-4.897,4.892H169.65c-2.693,0-4.895-2.202-4.895-4.892v-3.263 c0-2.691,2.201-4.894,4.895-4.894h64.166c2.693,0,4.897,2.202,4.897,4.894V245.727z"></path> </g> <g> <path d="M174.238,110.172c0,2.691-2.201,4.895-4.893,4.895H71.157c-2.693,0-4.895-2.203-4.895-4.895v-3.261 c0-2.691,2.201-4.893,4.895-4.893h98.188c2.691,0,4.893,2.202,4.893,4.893V110.172z"></path> </g> <g> <path d="M241.19,155.357c0,2.691-2.201,4.893-4.893,4.893H71.158c-2.693,0-4.895-2.202-4.895-4.893v-3.262 c0-2.691,2.201-4.894,4.895-4.894h165.139c2.691,0,4.893,2.202,4.893,4.894L241.19,155.357L241.19,155.357z"></path> </g> </g> <path d="M272.401,74.521L193.278,9.454C186.727,4.062,175.389,0,166.907,0H42.442c-10.76,0-19.516,8.754-19.516,19.516 c0,0,0,210.024,0,267.839c0,20.099,19.01,20.099,19.463,20.099c48.34,0,222.623,0,222.623,0c10.762,0,19.516-8.755,19.516-19.517 V100.198C284.528,91.247,279.313,80.207,272.401,74.521z M187.867,29.475c0-4.781,3.959-1.113,3.959-1.113l62.717,53.585 c0,0,4.014,3.949-2.865,3.949c-14.688,0-58.746,0-58.746,0c-2.793,0-5.065-2.271-5.065-5.064 C187.867,80.832,187.867,42.315,187.867,29.475z M265.012,292.999c0,0-179.055,0-223.99,0c-0.801,0-3.643-0.229-3.643-4.182 c0-54.407,0-269.302,0-269.302c0-2.745,2.32-5.063,5.063-5.063h124.464c2.107,0,6.51,1.118,6.51,7.138v59.242 c0,10.761,8.754,19.516,19.516,19.516h73.523c1.342,0,3.613,0.922,3.613,4.169c0,0.051,0.008,183.419,0.008,183.419 C270.076,290.729,267.805,292.999,265.012,292.999z"></path> </g> </g> </g> </g></svg>
            <CardTitle className="text-center">Essay</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Essai mengenai salah satu topik berikut:</p>
            <ul className="list-disc">
              
              <li>Cyber Physical System</li>
              <li>Embedded System</li>
              <li>Internet of Things</li>
              <li>Web Development</li>
            </ul>
          </CardContent>
          <CardFooter>
            <p>Format nama file :
                Essay_Judul Topik_Nama
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default Berkas;
