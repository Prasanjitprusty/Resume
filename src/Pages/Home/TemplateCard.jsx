import { useState } from "react";

function TemplateCard(props) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative w-6/12 h-96"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <img
        src={props.data}
        alt='Template'
        className="w-full h-full object-cover"
      />
      <div className={`absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${show ? 'opacity-100': 'opacity-0' } `}>
        <button
          className="border-2 border-blue-500 bg-blue-500 text-white px-4 py-2 hover:bg-blue-700"
          onClick={props.clickEvent}
        >
          Use Template
        </button>
      </div>
    </div>
  );
}

export default TemplateCard;
