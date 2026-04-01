import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../../styles/FeSummary.css";
import scale from "../../images/scale.webp";
import scale2 from "../../images/scale-overweight.webp";
import scale3 from "../../images/scale-normal.webp";
import bodyImage from "../../images/male-obese.webp";
import bodyImage2 from "../../images/male-overweight.webp";
import bodyImage3 from "../../images/male-normal.webp";

const MaSummary = () => {
  const navigate = useNavigate();
  const [bmiData, setBmiData] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const prevData = JSON.parse(localStorage.getItem("userData")) || {};
  

  const {
    gender,
    ageGroup,
    goal,
    bodyType,
    desiredBody,
    exercisePreference,
    dailyRoutine,
    confidenceLog,
    selectedHabits,
    tirednessLevel,
    height,
    currentWeight,
    desiredWeight,
    currentAge,
    sleepDuration,
    waterIntake,
    selectedMeats,
    selectedFoods,
    selectedOccasion,
    eventDate,
    formData,
  } = prevData;

  const { name, email, contact } = formData || {};

  const convertToMeters = (feet, inches) => (feet * 12 + inches) * 0.0254;

  // Redirect to home if no data is available
  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      navigate("/MaUserSelection");
    }
  }, [navigate]);

  useEffect(() => {
    if (
      !prevData ||
      !height ||
      !currentWeight ||
      !formData
    ) {
      return;
    }

    const heightInMeters = height?.cm
      ? height.cm / 100
      : convertToMeters(height?.feet || 0, height?.inches || 0);
    const bmi = currentWeight / (heightInMeters * heightInMeters);

    let bmiCategory = "Normal";
    let bodyImg = null;
    let risksMessage = "Good BMI to tone up and get your dream body.";

    if (bmi < 18.5) {
      bmiCategory = "Underweight";
      risksMessage = "Reach a healthy weight to avoid health risks.";
    } else if (bmi < 24.9) {
      bodyImg = bodyImage3;
    } else if (bmi < 29.9) {
      bmiCategory = "Overweight";
      bodyImg = bodyImage2;
      risksMessage = "Increased risk of heart issues and chronic pain.";
    } else {
      bmiCategory = "Obese";
      bodyImg = bodyImage;
      risksMessage = "High risk of heart attack, stroke, and diabetes.";
    }

    setBmiData({ bmiCategory, bmi: bmi.toFixed(1), risksMessage, bodyImg });
  }, []);

  const handleNextClick = async () => {
    if (isSending) return;
    setIsSending(true);

    const templateParams = {
      gender: gender || "N/A",
      user_email: email || "N/A",
      user_name: name || "N/A",
      contact: contact || "N/A",
      bmi: bmiData?.bmi || "N/A",
      bmi_category: bmiData?.bmiCategory || "N/A",
      current_weight: currentWeight || "N/A",
      desired_weight: desiredWeight || "N/A",
      height: height?.cm
        ? `${height.cm} cm`
        : `${height?.feet || 0} ft ${height?.inches || 0} in`,
      selected_goal: goal || "N/A",
      selected_body_type: bodyType || "N/A",
      desired_body_type: desiredBody || "N/A",
      selected_routine: dailyRoutine || "N/A",
      exercise_preference: exercisePreference || "N/A",
      selected_habits: selectedHabits || "N/A",
      confidence_log: confidenceLog || "N/A",
      tiredness_level: tirednessLevel || "N/A",
      age: currentAge || "N/A",
      sleep_duration: sleepDuration || "N/A",
      water_intake: waterIntake || "N/A",
      selected_meats: selectedMeats || "N/A",
      selected_foods: selectedFoods || "N/A",
      selected_occasion: selectedOccasion || "N/A",
      event_date: eventDate || "N/A",
    };

    try {
      await emailjs.send(
        "service_qxfs2ci",
        "template_uxwot6g",
        templateParams,
        { publicKey: "Uh6r7Lar2GwxiYyiA" }
      );
      console.log("Email sent!");
    } catch (error) {
      console.error("Email failed:", error);
    } finally {
      setIsSending(false);
      navigate("/ResultSe", {
        state: {
          currentWeight,
          desiredWeight,
          height,
          email,
          name,
          contact,
        },
      });
    }
  };

  if (!bmiData) return <h2>Loading...</h2>;

  return (
    <div className="FeSummary-wrapper">
      <h2>Your personal summary</h2>

      <div className="Card">
        <div className="bmi-header">
          <h3>Body Mass Index (BMI)</h3>
          <p>{bmiData.bmiCategory}</p>
          <p>BMI: {bmiData.bmi}</p>
        </div>

        <div className="image-container">
          <img
            src={
              bmiData.bmiCategory === "Normal"
                ? scale3
                : bmiData.bmiCategory === "Overweight"
                ? scale2
                : scale
            }
            alt="scale"
            className="scale-image"
          />
        </div>

        <div className="bmi-header1">{bmiData.risksMessage}</div>

        <div className="person-details-wrapper">
          {bmiData.bodyImg && (
            <div className="person-image">
              <img src={bmiData.bodyImg} alt="body" />
            </div>
          )}
        </div>
      </div>

      <button
        className="FeSummary-button"
        onClick={handleNextClick}
        disabled={isSending}
      >
        {isSending ? "Sending..." : "Next"}<span>›</span>
      </button>
    </div>
  );
};

export default MaSummary;


// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { send } from "emailjs-com";
// import "../../styles/FeSummary.css";
// import scale from "../../images/scale.webp";
// import scale2 from "../../images/scale-overweight.webp";
// import scale3 from "../../images/scale-normal.webp";
// import bodyImage from "../../images/male-obese.webp";
// import bodyImage2 from "../../images/male-overweight.webp";
// import bodyImage3 from "../../images/male-normal.webp";

// const MaSummary = () => {
//   const navigate = useNavigate();
//   const [bmiData, setBmiData] = useState(null);

//   const prevData = JSON.parse(localStorage.getItem("userData")) || {};

//   const {
//     gender,
//     goal,
//     bodyType,
//     desiredBody,
//     exercisePreference,
//     dailyRoutine,
//     confidenceLog,
//     selectedHabits,
//     tirednessLevel,
//     height,
//     currentWeight,
//     desiredWeight,
//     currentAge,
//     sleepDuration,
//     waterIntake,
//     selectedMeats,
//     selectedFoods,
//     selectedOccasion,
//     eventDate,
//     formData,
//   } = prevData;

//   const { name, email, contact } = formData || {};

//   const convertToMeters = (feet, inches) => (feet * 12 + inches) * 0.0254;

//   // Redirect if no data
//   useEffect(() => {
//     if (!localStorage.getItem("userData")) {
//       navigate("/MaUserSelection");
//     }
//   }, [navigate]);

//   // Calculate BMI
//   useEffect(() => {
//     if (!height || !currentWeight) return;

//     const heightInMeters = height?.cm
//       ? height.cm / 100
//       : convertToMeters(height?.feet || 0, height?.inches || 0);

//     const bmi = currentWeight / (heightInMeters * heightInMeters);

//     let bmiCategory = "Normal";
//     let bodyImg = null;
//     let risksMessage = "Good BMI to tone up and get your dream body.";

//     if (bmi < 18.5) {
//       bmiCategory = "Underweight";
//       risksMessage = "Reach a healthy weight to avoid health risks.";
//     } else if (bmi < 24.9) {
//       bodyImg = bodyImage3;
//     } else if (bmi < 29.9) {
//       bmiCategory = "Overweight";
//       bodyImg = bodyImage2;
//       risksMessage = "Increased risk of heart issues and chronic pain.";
//     } else {
//       bmiCategory = "Obese";
//       bodyImg = bodyImage;
//       risksMessage = "High risk of heart attack, stroke, and diabetes.";
//     }

//     setBmiData({
//       bmiCategory,
//       bmi: bmi.toFixed(1),
//       risksMessage,
//       bodyImg,
//     });
//   }, [height, currentWeight]);

//   // ✅ EMAIL FUNCTION (moved outside)
//   const handleEmailSend = async () => {
//     if (!email) {
//       console.error("Email missing!");
//       return;
//     }

//     if (!bmiData) {
//       console.error("BMI not ready!");
//       return;
//     }

//     const templateParams = {
//       gender: gender || "N/A",
//       user_email: email,
//       user_name: name || "N/A",
//       contact: contact || "N/A",
//       bmi: bmiData.bmi,
//       bmi_category: bmiData.bmiCategory,
//       current_weight: currentWeight || "N/A",
//       desired_weight: desiredWeight || "N/A",
//       height: height?.cm
//         ? `${height.cm} cm`
//         : `${height?.feet || 0} ft ${height?.inches || 0} in`,
//       selected_goal: goal || "N/A",
//       selected_body_type: bodyType || "N/A",
//       desired_body_type: desiredBody || "N/A",
//       selected_routine: dailyRoutine || "N/A",
//       exercise_preference: exercisePreference || "N/A",
//       selected_habits: selectedHabits || "N/A",
//       confidence_log: confidenceLog || "N/A",
//       tiredness_level: tirednessLevel || "N/A",
//       age: currentAge || "N/A",
//       sleep_duration: sleepDuration || "N/A",
//       water_intake: waterIntake || "N/A",
//       selected_meats: selectedMeats || "N/A",
//       selected_foods: selectedFoods || "N/A",
//       selected_occasion: selectedOccasion || "N/A",
//       event_date: eventDate || "N/A",
//     };

//     try {
//       console.log("Sending email...");
//       const res = await send(
//         "service_qxfs2ci",
//         "template_uxwot6g",
//         templateParams,
//         "Uh6r7Lar2GwxiYyiA"
//       );
//       console.log("Email sent successfully!", res);
//     } catch (error) {
//       console.error("Email failed:", error);
//     }
//   };

//   if (!bmiData) return <h2>Loading...</h2>;

//   return (
//     <div className="FeSummary-wrapper">
//       <h2>Your personal summary</h2>

//       <div className="Card">
//         <div className="bmi-header">
//           <h3>Body Mass Index (BMI)</h3>
//           <p>{bmiData.bmiCategory}</p>
//           <p>BMI: {bmiData.bmi}</p>
//         </div>

//         <div className="image-container">
//           <img
//             src={
//               bmiData.bmiCategory === "Normal"
//                 ? scale3
//                 : bmiData.bmiCategory === "Overweight"
//                 ? scale2
//                 : scale
//             }
//             alt="scale"
//             className="scale-image"
//           />
//         </div>

//         <div className="bmi-header1">{bmiData.risksMessage}</div>

//         <div className="person-details-wrapper">
//           {bmiData.bodyImg && (
//             <div className="person-image">
//               <img src={bmiData.bodyImg} alt="body" />
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ✅ BUTTON CLICK TRIGGERS EMAIL */}
//       <button
//         className="FeSummary-button"
//         onClick={async () => {
//           await handleEmailSend(); // 🔥 email triggered here

//           navigate("/ResultSe", {
//             state: {
//               currentWeight,
//               desiredWeight,
//               height,
//               email,
//               name,
//               contact,
//             },
//           });
//         }}
//       >
//         Next<span>›</span>
//       </button>
//     </div>
//   );
// };

// export default MaSummary;