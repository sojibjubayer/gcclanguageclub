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






export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            // LANGUAGES PAGE
            {
                path:'/learnarabic',
                element:<LearnArabic></LearnArabic>
            },
            {
                path:'/learnenglish',
                element:<LearnEnglish></LearnEnglish>
            },
            {
                path:'/learnhindi',
                element:<LearnHindi></LearnHindi>
            },
            //DETAILS PAGE
            {
                path:'/arabicvocabularies',
                element:<ArabicVocabularies></ArabicVocabularies>
            },
            {
                path:'/arabicsentences',
                element:<ArabicSentences></ArabicSentences>
            },
            {
                path:'/englishvocabularies',
                element:<EnglishVocabularies></EnglishVocabularies>
            },
            {
                path:'/englishsentences',
                element:<EnglishSentences></EnglishSentences>
            },
            {
                path:'/hindivocabularies',
                element:<HindiVocabularies></HindiVocabularies>
            },
            {
                path:'/hindisentences',
                element:<HindiSentences></HindiSentences>
            },
            {
                path:'/addvocabulary',
                element:<VocabularyForm></VocabularyForm>
            },
        ]
    }])