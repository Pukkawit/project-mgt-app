const QuickVideoPage = () => {
  return (
    <div className="max-container pt-5 w-full flex flex-col items-center">
      <div className="w-full max-w-[960px] aspect-w-16 aspect-h-9 mb-8">
        <video src="" className="w-full h-full object-cover" controls></video>
      </div>
      <h2 className="heading2 text-darkColors-grey text-center pb-2">
        Welcome to Product name!
      </h2>
      <p className="mediumBodyTextM text-darkColors-grey text-center max-w-96">
        Watch this quick video to know how Product name can transform your
        productivity.
      </p>
    </div>
  );
};

export default QuickVideoPage;
