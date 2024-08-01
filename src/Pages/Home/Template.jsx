import React from 'react';
import { connect } from 'react-redux';
import TemplateCard from './TemplateCard';
import { useNavigate } from 'react-router-dom';
import { SetTemplate } from '../../Pages/Home/Template_action'; // Adjust path

function Template({ SetTemplate_Handler }) {
  const navigate = useNavigate(); // Hook is used directly inside the component

  const Template_Array = [
    'images/Templete1.png',
    'images/Templete2.jpg',
    'images/Templete3.jpg',
    'images/Templete4.jpg',
  ];

  const useTemplate = (template) => {
    console.log('clicked');
    SetTemplate_Handler(template); // Dispatch action
    navigate('/personal_information'); // Navigate
  };

  return (
    <div className='w-full h-full bg-orange-300'>
      <h1 className='text-4xl font-bold mb-4 flex justify-center'>Template</h1>
      <h1 className='text-2xl font-bold mb-4 flex justify-center'>Select a Template to Get Started</h1>
      <div className='flex gap-8'>
        {Template_Array.map((template, idx) => (
          <TemplateCard 
            data={template} 
            key={idx} 
            clickEvent={useTemplate} // Correct usage
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  templateData: state.template?.templateData, // Ensure state is correctly structured
});

const mapDispatchToProps = (dispatch) => ({
  SetTemplate_Handler: (template) => dispatch(SetTemplate(template)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Template);
