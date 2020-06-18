import PortofolioProps from "./portofolio";
import iCanHealth from "../asset/iCanHealth.jpg"
import sportest from "../asset/sportest.png"
import pintoDoa from "../asset/pintudoa.png";
import dicodingChat from '../asset/socket-io.png'

export var portofolioList: PortofolioProps[]=
    [
        {
            explanation : "Aplikasi ini dirancang di Malang oleh Iqbal Sholahudin Maududdy yang berkelahiran Surabaya, 28 agustus 1998. Seorang Mahasiswa Fakultas Kedokteran Universitas Brawijaya angkatan 2017. Dengan tujuan membantu orang tua dalam menambah wawasan terkait kesehatan anak. Dalam pembuatanya, data yang ada aplikasi ini telah di konsultasikan dengan dr. Irene Ratridewi Sp.A(K), M.Kes. Seorang dokter anak yang mengajar di Fakultas kedokteran Brawijaya dan Spesialis anak di RSSA Malang.",
            github:null,
            image:"https://lh3.googleusercontent.com/YHbnfNa449Vsk2BmrHVUBLfpwE4l7fnNaIPjHSr6YRRyOL4ajOlQM0JqhyxvDBP1gWg=s180-rw",
            link:"https://play.google.com/store/apps/details?id=com.projectfk.pediatric",
            name:"Pediatric",
            tools:"Android Studio , Firebase"
        },{
            tools:"Flutter",
            link:null,
            github:"https://github.com/falakh/scan-makanan",
            explanation: "Merupakan aplikasi yang berguna untuk membantu penderita penyakit untuk mengecek apakah makanan dapat dikonsumsi atau tidak melalui gambar dan foto",
            image:iCanHealth,
            name:"ICanHealth" ,
        },{
            tools: "PHP (Code Igniter), Javascript (Vue JS)",
            link: null,
            github : "https://github.com/falakh/Sportest",
            explanation : "Merupakan aplikasi web yang membagikan info tentang event dan perlombaan yang berhubungan dengan olahraga",
            image : sportest,
            name : "Sportest"
        },{
            tools: "PHP (Laravel), Javascript ",
            link: null,
            github : null,
            explanation : "Merupakan aplikasi web untuk mengumpulkan bantuan dan memberikan bantuan keapda orang yang membutuhkan",
            image : pintoDoa,
            name : "Pintudoa"
        },{
            tools: "Node JS (Express JS), Vue js ",
            link: null,
            github : "https://github.com/falakh/azure-node",
            explanation : "Merupakan aplikasi web chatting yang dibuat untuk menyelesaikan kelas menjadi developer expert di dicoding.com",
            image : dicodingChat,
            name : "Dicoding Chat"
        }
    ]
