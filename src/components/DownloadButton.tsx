import { FC } from "react";
import { Download } from "lucide-react";

const DownloadButton: FC = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Alexander_Gonzalez_CV.pdf";
    link.download = "Alexander_Gonzalez_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="text-white border-b-2 border-white pb-2 flex items-center text-sm sm:text-lg hover:border-white/70 transition-colors"
      onClick={downloadCV}
    >
      Descargar CV
      <Download className="h-5 w-5 sm:h-6 sm:w-6 ml-2" />
    </button>
  );
};

export default DownloadButton;
