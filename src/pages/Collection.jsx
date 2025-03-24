import React from 'react'

const Collection = () => {
  const steps = [
    { id: "01", title: "Make An Appointment" },
    { id: "02", title: "Meet Our Team" },
    { id: "03", title: "Get Consultation" },
    { id: "04", title: "Start Project" },
  ];
  return (
    <div>
       <div className="relative bg-[url('/your-bg-image.jpg')] bg-cover bg-center py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* Line Connector */}
            {index !== 0 && (
              <div className="absolute -left-20 top-1/2 w-20 border-dashed border-2 border-white"></div>
            )}

            {/* Step Circle */}
            <div className="w-24 h-24 bg-gradient-to-b from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <p className="text-white font-bold text-center">
                {step.id}. <br />
                {step.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Collection