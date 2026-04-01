import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import TermsAndConditions from "./components/TermsAndConditions";
import ContactUs from "./components/ContactUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import WeightLossPlan from "./components/Women/WeightLossPlan";
import MenWeightLoss from "./components/Men/MenWeightLoss";
import GoalPage from "./components/Goalpage";
import MenGoalPage from "./components/Men/MenGoalPage";
import BodyTypeSelection from "./components/Women/BodyTypeSelection";
import MenBodyTypeSelection from "./components/Men/MenBodyTypeSelection";
import FeBodyTypeChooser from "./components/Women/FeBodyTypeChooser";
import MaBodyTypeChooser from "./components/Men/MaBodyTypeChooser";
import FeAreaImprove from "./components/Women/FeAreaImprove";
import MaAreaImprove from "./components/Men/MaAreaImprove";
import DailyRoutinePage from "./components/DailyRoutinePage";
import BodyConfidenceLog from "./components/BodyConfidenceLog";
import ExerciseQuiz from "./components/ExerciseQuiz";
import DayTiredQuiz from "./components/DayTiredQuiz";
import UsersPage from "./components/UsersPage";
import HeightInput from "./components/HeightInput";
import WeightInput from "./components/WeightInput";
import DesiredInput from "./components/DesiredInput";
import AgeInput from "./components/AgeInput";
import PeakPerformance from "./components/PeakPerformance";
import Checkboxone from "./components/Checkboxone";
import SleepQuiz from "./components/SleepQuiz";
import WaterQuiz from "./components/WaterQuiz";
import MeatsPage from "./components/MeatsPage";
import FoodPage from "./components/FoodPage";
import Occasion from "./components/Occasion";
import Event from "./components/Event";
import ResultFirst from "./components/ResultFirst";
import DetailsForm from "./components/DetailsForm";
import FeSummary from "./components/Women/FeSummary";
import ResultSe from "./components/ResultSe";
import MaAgeInput from "./components/Men/MaAgeInput";
import MaPeakPerformance from "./components/Men/MaPeakPerformance";
import MaDailyRoutinePage from "./components/Men/MaDailyRoutinePage";
import MaBodyConfidenceLog from "./components/Men/MaBodyConfidenceLog";
import MaExercise from "./components/Men/MaExercise";
import MaDayTiredQuiz from "./components/Men/MaDayTiredQuiz";
import MaUsersPage from "./components/Men/MaUsersPage";
import MaHeightInput from "./components/Men/MaHeightInput";
import MaWeightInput from "./components/Men/MaWeightInput";
import MaDesiredInput from "./components/Men/MaDesiredInput";
import MaCheckboxone from "./components/Men/MaCheckboxone";
import MaSleepQuiz from "./components/Men/MaSleepQuiz";
import MaWaterQuiz from "./components/Men/MaWaterQuiz";
import MaMeatsPage from "./components/Men/MaMeatsPage";
import MaFoodPage from "./components/Men/MaFoodPage";
import MaOccasion from "./components/Men/MaOccasion";
import MaEvent from "./components/Men/MaEvent";
import MaResultFirst from "./components/Men/MaResultFirst";
import MaDetailsForm from "./components/Men/MaDetailsform";
import MaSummary from "./components/Men/MaSummary";
import PaymentSuccess from "./components/PaymentSuccess";
import PaymentFailed from "./components/PaymentFailed";
import UserSelection from "./components/Men/UserSelection";
import FeUserSelection from "./components/Women/FeUserSelection";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      {<Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dorganicschallenge" element={<HomePage />} />
        <Route path="/Contactus" element={<ContactUs />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/WeightLossPlan" element={<WeightLossPlan />} />
        <Route path="/MenWeightLoss" element={<MenWeightLoss />} />
        <Route path="/GoalPage" element={<GoalPage />} />
        <Route path="/MenGoalPage" element={<MenGoalPage />} />
        <Route path="/BodyTypeSelection" element={<BodyTypeSelection />} />
        <Route path="/MenBodyTypeSelection" element={<MenBodyTypeSelection />} />
        <Route path="/FeBodyTypeChooser" element={<FeBodyTypeChooser />} />
        <Route path="/MaBodyTypeChooser" element={<MaBodyTypeChooser />} />
        <Route path="/FeAreaImprove" element={<FeAreaImprove />} />
        <Route path="/MaAreaImprove" element={<MaAreaImprove />} />
        <Route path="/DailyRoutinePage" element={<DailyRoutinePage />} />
        <Route path="/BodyConfidenceLog" element={<BodyConfidenceLog />} />
        <Route path="/ExerciseQuiz" element={<ExerciseQuiz />} />
        <Route path="/DayTiredQuiz" element={<DayTiredQuiz />} />
        <Route path="/UsersPage" element={<UsersPage />} />
        <Route path="/HeightInput" element={<HeightInput />} />
        <Route path="/WeightInput" element={<WeightInput />} />
        <Route path="/DesiredInput" element={<DesiredInput />} />
        <Route path="/AgeInput" element={<AgeInput />} />
        <Route path="/PeakPerformance" element={<PeakPerformance />} />
        <Route path="/checkboxone" element={<Checkboxone />} />
        <Route path="/SleepQuiz" element={<SleepQuiz />} />
        <Route path="/WaterQuiz" element={<WaterQuiz />} />
        <Route path="/MeatsPage" element={<MeatsPage />} />
        <Route path="/FoodPage" element={<FoodPage />} />
        <Route path="/Occasion" element={<Occasion />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Resultfirst" element={<ResultFirst />} />
        <Route path="/DetailsForm" element={<DetailsForm />} />
        <Route path="/FeSummary" element={<FeSummary />} />
        <Route path="/ResultSe" element={<ResultSe />} />
        <Route path="/MaAgeInput" element={<MaAgeInput />} />
        <Route path="/MaPeakPerformance" element={<MaPeakPerformance />} />
        <Route path="/MaBodyConfidenceLog" element={<MaBodyConfidenceLog />} />
        <Route path="/MaExercise" element={<MaExercise />} />
        <Route path="/MaDayTiredQuiz" element={<MaDayTiredQuiz />} />
        <Route path="/MaUsersPage" element={<MaUsersPage />} />
        <Route path="/MaDailyRoutinePage" element={<MaDailyRoutinePage />} />
        <Route path="/MaHeightInput" element={<MaHeightInput />} />
        <Route path="/MaWeightInput" element={<MaWeightInput />} />
        <Route path="/MaDesiredInput" element={<MaDesiredInput />} />
        <Route path="/Macheckboxone" element={<MaCheckboxone />} />
        <Route path="/MaSleepQuiz" element={<MaSleepQuiz />} />
        <Route path="/MaWaterQuiz" element={<MaWaterQuiz />} />
        <Route path="/MaMeatsPage" element={<MaMeatsPage />} />
        <Route path="/MaFoodPage" element={<MaFoodPage />} />
        <Route path="/MaOccasion" element={<MaOccasion />} />
        <Route path="/MaEvent" element={<MaEvent />} />
        <Route path="/MaResultfirst" element={<MaResultFirst />} />
        <Route path="/MaDetailsForm" element={<MaDetailsForm />} />
        <Route path="/MaUserSelection" element={<UserSelection />} />
        <Route path="/FeUserSelection" element={<FeUserSelection />} />
        <Route path="/MaSummary" element={<MaSummary />} />
        <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
        <Route path="/PaymentFailed" element={<PaymentFailed />} />
      </Routes>
    </Router>
  );
};

export default App;