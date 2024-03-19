import React from "react";
import { BsCurrencyDollar, BsDot } from "react-icons/bs";
// import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerece = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center ">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$55,876.45</p>
            </div>
          </div>

          <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((i) => (
            <div
              key={i.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl  "
            >
              <button
                type="button"
                style={{ color: i.iconColor, backgroundColor: i.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {i.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{i.amount}</span>
                <span className={`text-sm  ml-2 text-${i.pcColor} `}>
                  {i.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{i.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4 ">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <BsDot />
                </span>
                <span>Expense</span>
              </p>

              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <BsDot />
                </span>
                <span>budget</span>
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-10 flex-wrap justify-center ">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$95,786</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full bg-green-400 ml-3 text-ss">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Bugdet</p>
              </div>

              <div className="mt-5">
                <p>
                  <span className="text-3xl font-semibold">$55,786</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor="blue"
                  id="line-sparkline"
                  type="line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerece;
