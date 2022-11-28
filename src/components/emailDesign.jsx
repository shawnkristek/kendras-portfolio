import {useState} from 'react';

import Image from 'next/image';

import {
    EmailColorPalette,
    EmailDropMenu,
    EmailExamples,
    EmailFont,
    EmailHighlight,
    EmailOverlay,
    EmailUndo,
} from 'lib/designImages';

const EmailDesign = () => {
  const [pressed, setPressed] = useState(false);

  const handlePressed = () => {
    setPressed(!pressed);
  };

  return (
    <div className="h-full w-full flex flex-col justify-center align-middle items-center">
      <div className={`h-full w-full flex-col justify-center align-middle items-center`}>
        {/* prototype */}
        <iframe
          className={`${pressed ? "hidden" : ""} h-full w-full flex-col justify-center align-middle items-center`}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FgkdkNmPxaW2Q4D3DlFcFT5%2F%25E2%259C%2585-Kendra-Wright---L5%3Fpage-id%3D569%253A2%26node-id%3D1328%253A2857%26viewport%3D-844%252C-379%252C0.2%26scaling%3Dscale-down%26starting-point-node-id%3D1328%253A2857"
          allowFullScreen
        ></iframe>
        {/* component images */}
        <div className={`${!pressed ? "hidden" : ""} h-full w-full flex justify-center align-middle`} >
          <EmailDesignComponents className={`${!pressed ? "hidden" : ""}`} />
        </div>
      </div>
      {/* toggle switch */}
      <button onClick={handlePressed} className={`bg-[#835f02] focus:ring-1 focus-outline-none ring-[#c5cdcd] shadow-sm shadow-[#835f02]/50 rounded-lg text-sm px-5 py-2.5 text-center hover:scale-105 hover:ring-2 transistion duration-200 font-semibold mt-8 ${pressed ? "bg-white text-[#835f02]" : ""}`}>
        <span className={`${!pressed ? "hidden" : ""}`} >Figma Prototype</span>
        <span className={`${pressed ? "hidden" : ""}`}>Component Images</span>
      </button>
    </div>
  );
}



const EmailDesignComponents = ({className, ...props}) => {
    return (
        <div className={`${className} h-full flex flex-col justify-center align-middle gap-5 lg:gap-10`}>

                <div className="flex flex-row justify-between gap-5 lg:gap-10">
                    <div>
                        <Image src={EmailColorPalette} alt="email color palette" />
                    </div>
                    <div>
                        <Image src={EmailFont} alt="email fonts" />
                    </div>
                    <div>
                        <div>
                            <Image src={EmailUndo} alt="email undo" />
                        </div>
                        <div>
                            <Image src={EmailHighlight} alt="email highlight" />
                        </div>
                    </div>
                </div>

                <div className='flex flex-row justify-between gap-5 lg:gap-10'>
                    <div>
                        <Image src={EmailExamples} alt="email examples" />
                    </div>
                    <div>
                        <Image src={EmailDropMenu} alt="email drop menu" />
                    </div>
                    <div>
                        <Image src={EmailOverlay} alt="email overlay" />
                    </div>
                </div>

        </div>
    );
}

export {
    EmailDesign,
}
