// import React, { FormEvent, useState } from "react";
// import pix from "../assets/download.png";
// import dummy from "../assets/dummy Image.png";
// import { GrGallery } from "react-icons/gr";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup"
// import { useNavigate } from "react-router-dom";


// const ParentStep = () => {

// const navigate= useNavigate()
  

 

//   const onSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     if (!isLastStep) return next();
//     alert("Successful Account Creation");
//     console.log({ message: "Successful Account Creation", data });

//     const { title, motivation, description,amountNeeded } = data;

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("motivation", motivation);
//     formData.append("description", description);
//     formData.append("amountNeeded", amountNeeded);
//     formData.append("avatar", image);
    
   

//   };
//   return (
//     <>
//       <div className="w-[100%] h-[100vh] flex justify-center items-center bg-blue-200">
//         {/* <pre>{JSON.stringify(data)}</pre> */}
//         <form
//           className="min-w-[600px] min-h-[400px] bg-white rounded-md shadow-md flex flex-col items-center relative"
//           onSubmit={onSubmit}
//         >
//           <div className="absolute top-3 right-3">
//             {currentStepIndex + 1} / {steps.length}
//           </div>
//           <div>{step}</div>
//           <div className="h-[80px] w-full flex items-center gap-3 pl-3">
//           </div>

//           <div className="flex justify-end w-[550px] gap-5 mb-2">
//             {!isFirstStep && (
//               <button
//                 className="py-2 px-4 bg-[dodgerblue] rounded-md text-white"
//                 type="button"
//                 onClick={back}
//               >
//                 Previous
//               </button>
//             )}
//             <button
//               className="py-2 px-4 bg-[dodgerblue] rounded-md text-white "
//               type="submit"
//               onClick={next}
//             >
//               {isLastStep ? "Submit" : "Next"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default ParentStep;



