import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

const data = {
  datasets: [
    {
      data: [7, 3],
      backgroundColor: ["#FFD700", "#FFECB3"],
      display: true,
      borderColor: "#D1D6DC"
    }
  ]
};

function Goal() {
  return (
    <div className="flex items-center justify-center   bg-white w-full flex-col px-6 py-6 rounded-2xl max-md:mt-4 max-md:px-5 ">
      <div className="text-neutral-900 text-xl font-semibold tracking-normal whitespace-nowrap">
        Quarter goal
      </div>
      <div className="relative flex items-center justify-center  w-full h-36 max-md:h-44 mx-auto">
        <Doughnut
          data={data}
          options={{
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                enabled: false
              }
            },
           
            rotation: -90,
            circumference: 180,
            cutout: "75%",
            maintainAspectRatio: true,
            responsive: true
          }}
        />
        <div
          className="absolute flex justify-center items-center w-[144px]  bottom-10  "
        >
          <div>
            <h3>84%</h3>
          </div>
          
        </div>
        
      </div>
      <div className="flex  rounded-full items-stretch gap-1 mt-6">
        <div className="rounded-full text-sm text-yellow-900 tracking-tight grow whitespace-nowrap">
          All goals
        </div>
        <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/48dfa3848c4a447ba92ac7673e35c2bea0710b8f76946a80e9efffe411a9104a?"
                        className="aspect-square object-contain object-center w-3.5 shrink-0 self-start"
                      />
      </div>
    </div>
  );
}

export default Goal;
