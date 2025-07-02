import{Routes , Route}from"react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MainSection from "./Components/MainSection";
import NewsEvents from "./Components/NewsEvents";

// About Us Pages
import TheInstitute from "./Pages/AboutUs/TheInstitute";
import Missionandvision from"./Pages/AboutUs/Missionandvision";
import History from "./Pages/AboutUs/History";
import DirectorMessage from "./Pages/AboutUs/DirectorMessage";
import PrincipalMessage from "./Pages/AboutUs/PrincipalMessage";
import SecretaryMessage from "./Pages/AboutUs/SecretaryMessage";
import Greencampus from "./Pages/AboutUs/GreenCampus";

// Admission Pages
import Btech from "./Pages/Admission/Btech";
import Fees from "./Pages/Admission/Fees";
import Scholarship from "./Pages/Admission/Scholarship";
import MandatoryDisclosure from "./Pages/Admission/MandatoryDisclosure";
import Facilities from "./Pages/Admission/Facilities";

// Campus Pages
import CulturalEvents from "./Pages/Campus/CulturalEvents";
import CampusFacilities from "./Pages/Campus/CampusFacilities";
import Discipline from "./Pages/Campus/Discipline";
import StudentSocieties from "./Pages/Campus/StudentSocieties";
import Sports from "./Pages/Campus/Sports";
import Hostels from "./Pages/Campus/Hostels";
import Cafeteria from "./Pages/Campus/Cafeteria";
import Gym from "./Pages/Campus/Gym";

// Department Pages
import AppliedScience from "./Pages/Department/AppliedScience";
import CivilEngg from "./Pages/Department/CivilEngg";
import ComputerScience from "./Pages/Department/ComputerScience";
import ElectronicsComm from "./Pages/Department/ElectronicsComm";
import InformationTech from "./Pages/Department/InformationTech";
import MechanicalEngg from "./Pages/Department/MechanicalEngg";

// Student Corner Pages
import Alumni from "./Pages/StudentCorner/Alumni";
import Exams from "./Pages/StudentCorner/Exams";
import PreviousPaper from "./Pages/StudentCorner/PreviousPaper";
import Assignments from "./Pages/StudentCorner/Assignments";
import AcademicCalender from "./Pages/StudentCorner/AcademicCalender";
import PlacementCell from "./Pages/StudentCorner/PlacementCell";
import Apjaktu from "./Pages/StudentCorner/Apjaktu";

// Contact Pages
import ContactDetails from "./Pages/Contact/ContactDetails";
import HowToReach from "./Pages/Contact/HowToReach";

// Anti Ragging Page
import AntiRagging from "./Pages/AntiRagging/AntiRagging";

function App() {
  return (
    <>
      <Navbar />
      <MainSection />
      <NewsEvents />
  
      <Routes>
        {/* About Us */}
        <Route path="/AboutUs/TheInstitute" element={<TheInstitute />} />
        <Route path="/AboutUs/Missionandvision" element={<Missionandvision/>} />
        <Route path="/AboutUs/History" element={<History />} />
        <Route path="/AboutUs/DirectorMessage" element={<DirectorMessage />} />
        <Route path="/AboutUs/PrincipalMessage" element={<PrincipalMessage />} />
        <Route path="/AboutUs/SecretaryMessage" element={<SecretaryMessage />} />
        <Route path="/AboutUs/GreenCampus" element={<Greencampus />} />
        {/* Admission */}
        <Route path="/Admission/Btech" element={<Btech/>} />
        <Route path="/Admission/fees" element={<Fees />} />
        <Route path="/Admission/scholarship" element={<Scholarship />} />
        <Route path="/Admission/mandatory-disclosure" element={<MandatoryDisclosure />} />
        <Route path="/Admission/facilities" element={<Facilities />} />

        {/* Campus */}
        <Route path="/Campus/cultural-events" element={<CulturalEvents />} />
        <Route path="/Campus/campus-facilities" element={<CampusFacilities />} />
        <Route path="/Campus/discipline" element={<Discipline />} />
        <Route path="/Campus/student-societies" element={<StudentSocieties />} />
        <Route path="/Campus/sports" element={<Sports />} />
        <Route path="/Campus/hostels" element={<Hostels />} />
        <Route path="/Campus/cafeteria" element={<Cafeteria />} />
        <Route path="/Campus/gym" element={<Gym />} />

        {/* Department */}
        <Route path="/Department/applied-science" element={<AppliedScience />} />
        <Route path="/Department/civil-engg" element={<CivilEngg />} />
        <Route path="/Department/computer-science" element={<ComputerScience />} />
        <Route path="/Department/electronics-comm" element={<ElectronicsComm />} />
        <Route path="/Department/information-tech" element={<InformationTech />} />
        <Route path="/Department/mechanical-engg" element={<MechanicalEngg />} />

        {/* Student Corner */}
        <Route path="/student-corner/alumni" element={<Alumni />} />
        <Route path="/student-corner/exams" element={<Exams />} />
        <Route path="/student-corner/previouspaper" element={<PreviousPaper />} />
        <Route path="/student-corner/assignments" element={<Assignments />} />
        <Route path="/student-corner/academic-calender" element={<AcademicCalender />} />
        <Route path="/student-corner/placement-cell" element={<PlacementCell />} />
        <Route path="/student-corner/apjaktu" element={<Apjaktu />} />

        {/* Contact */}
        <Route path="/Contact/contact-details" element={<ContactDetails />} />
        <Route path="/Contact/how-to-reach" element={<HowToReach />} />

        {/* Anti-Ragging */}
        <Route path="/anti-ragging" element={<AntiRagging />} />
      </Routes>
    
      <Footer />
    </>
  );
}

export default App;