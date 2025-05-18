import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import LearnArabic from "../pages/learnArabic/LearnArabic";
import LearnEnglish from "../pages/learnEnglish/LearnEnglish";
import LearnHindi from "../pages/learnHindi/LearnHindi";
import ArabicVocabularies from "../pages/learnArabic/ArabicVocabularies";
import ArabicSentences from "../pages/learnArabic/ArabicSentences";
import EnglishVocabularies from "../pages/learnEnglish/EnglishVocabularies";
import EnglishSentences from "../pages/learnEnglish/EnglishSentences";
import HindiVocabularies from "../pages/learnHindi/HindiVocabularies";
import HindiSentences from "../pages/learnHindi/HindiSentences";
import VocabularyForm from "../pages/form/VocabularyForm";
import ArabicLessons from "../pages/learnArabic/ArabicLessons";
import ArabicAlphabet from "../pages/learnArabic/ArabicAlphabet";
import EnglishAlphabet from "../pages/learnEnglish/EnglishAlphabet";
import HindiAlphabet from "../pages/learnHindi/HindiAlphabet";
import Registration from "../pages/form/Registration";
import Login from "../pages/form/Login";
import AdminLayout from "../pages/admin/AdminLayout";
import ManageUsers from "../pages/admin/ManageUsers";
import AdminHome from "../pages/admin/AdminHome";
import ManageVocabulary from "../pages/admin/ManageVocabulary";
import AdminRoute from "../pages/admin/AdminRoute";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      // LANGUAGES PAGE
      {
        path: "arabiclessons",
        element: <ArabicLessons></ArabicLessons>,
      },
      {
        path: "learnarabic",
        element: <LearnArabic></LearnArabic>,
      },
      {
        path: "learnenglish",
        element: <LearnEnglish></LearnEnglish>,
      },
      {
        path: "learnhindi",
        element: <LearnHindi></LearnHindi>,
      },
      //DETAILS PAGE
      {
        path: "lesson/:lessonType",
        element: <ArabicVocabularies></ArabicVocabularies>,
      },
      {
        path: "arabicsentences",
        element: <ArabicSentences></ArabicSentences>,
      },
      {
        path: "englishvocabularies",
        element: <EnglishVocabularies></EnglishVocabularies>,
      },
      {
        path: "englishsentences",
        element: <EnglishSentences></EnglishSentences>,
      },
      {
        path: "hindivocabularies",
        element: <HindiVocabularies></HindiVocabularies>,
      },
      {
        path: "hindisentences",
        element: <HindiSentences></HindiSentences>,
      },
      {
        path: "addvocabulary",
        element: <VocabularyForm></VocabularyForm>,
      },
      //ALPHABET
      {
        path: "arabicalphabet",
        element: <ArabicAlphabet></ArabicAlphabet>,
      },
      {
        path: "englishalphabet",
        element: <EnglishAlphabet></EnglishAlphabet>,
      },
      {
        path: "hindialphabet",
        element: <HindiAlphabet></HindiAlphabet>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "contactus",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoute><AdminLayout></AdminLayout></AdminRoute>,
    children: [
      {
        path: "",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "addvocabulary",
        element: <VocabularyForm></VocabularyForm>,
      },
      {
        path: "managevocabulary",
        element: <ManageVocabulary></ManageVocabulary>
      },

      {
        path: "manageusers",
        element: <ManageUsers></ManageUsers>,
      },
    ],
  },
]);
