import { useState } from "react";

const ToiletDetails = () => {
  const [dropdown, setDropdown] = useState<Boolean>(false);

  return (
    <div className="border-b border-gray20">
      <div className="p-5 flex items-center justify-between">
        <div className="text-base text-tnBlack font-normal leading-[26px]">
          화장실 세부 정보
        </div>
        <img
          onClick={() => setDropdown(!dropdown)}
          className="cursor-pointer"
          src={
            dropdown
              ? "/images/toilet/dropdown-opened.svg"
              : "/images/toilet/dropdown-closed.svg"
          }
          alt="dropdown-opened"
        ></img>
      </div>
      {dropdown ? (
        <div className="origin-top animate-dropdown transition-all duration-300 pt-3 pl-5 pb-[42px] pr-[25px] bg-[#F6F6F6] text-tnBlack font-normal text-base leading-[26px]">
          <div className="flex justify-between mb-3">
            <div>남녀공용여부</div>
            <div className="">Y</div>
          </div>
          <div className="flex justify-between mb-3">
            <div>비상벨 설치여부</div>
            <div>N</div>
          </div>
          <div className="flex justify-between mb-3">
            <div>CCTV 설치유무</div>
            <div>N</div>
          </div>
          <div className="flex justify-between mb-3">
            <div>기저귀 교환대 유무</div>
            <div>Y</div>
          </div>
          <div className="flex mb-9">
            <div className="mr-11">남성용</div>
            <div className="flex-1 pt-[1.5px] space-y-3 text-base font-normal text-gray60">
              <div className="flex justify-between">
                <div>대변기 수</div>
                <div>0</div>
              </div>
              <div className="flex justify-between">
                <div>소변기 수</div>
                <div>0</div>
              </div>
              <div className="flex justify-between">
                <div>장애인용 대변기 수</div>
                <div>0</div>
              </div>
              <div className="flex justify-between">
                <div>장애인용 소변기 수</div>
                <div>0</div>
              </div>
              <div className="flex justify-between">
                <div>어린이용 대변기 수</div>
                <div>0</div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mr-11">여성용</div>
            <div className="flex-1 pt-[1.5px] space-y-3 text-base font-normal text-gray60">
              <div className="flex justify-between">
                <div>대변기 수</div>
                <div>0</div>
              </div>
              <div className="flex justify-between">
                <div>장애인용 대변기 수</div>
                <div>0</div>
              </div>

              <div className="flex justify-between">
                <div>어린이용 대변기 수</div>
                <div>0</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ToiletDetails;
