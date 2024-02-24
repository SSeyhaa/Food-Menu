import foodImage from "../assets/Image_created_with_a_mobile_phone.jpg";

export default function FoodCard() {
  return (
    <>
      <div className="flex justify-between mt-5">
        <div className="bg-orange-500 w-32 h-32 rounded flex justify-center items-center">
          <div className="bg-neutral-500 w-20 h-20 rounded-full">
            <img
              className="object-cover w-20 h-20 rounded-full"
              src={foodImage}
              alt="none"
            />
          </div>
        </div>

        <div className="bg-orange-500 w-32 h-32 rounded flex justify-center items-center">
          <div className="bg-neutral-500 w-20 h-20 rounded-full">
            <img
              className="object-cover w-20 h-20 rounded-full"
              src={foodImage}
              alt="none"
            />
          </div>
        </div>

        <div className="bg-orange-500 w-32 h-32 rounded flex justify-center items-center">
          <div className="bg-neutral-500 w-20 h-20 rounded-full">
            <img
              className="object-cover w-20 h-20 rounded-full"
              src={foodImage}
              alt="none"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="bg-orange-500 w-32 h-32 rounded flex justify-center items-center">
          <div className="bg-neutral-500 w-20 h-20 rounded-full">
            <img
              className="object-cover w-20 h-20 rounded-full"
              src={foodImage}
              alt="none"
            />
          </div>
        </div>

        <div className="bg-orange-500 w-32 h-32 rounded flex justify-center items-center">
          <div className="bg-neutral-500 w-20 h-20 rounded-full">
            <img
              className="object-cover w-20 h-20 rounded-full"
              src={foodImage}
              alt="none"
            />
          </div>
        </div>

        <div className="bg-orange-500 w-32 h-32 rounded flex justify-center items-center">
          <div className="bg-neutral-500 w-20 h-20 rounded-full">
            <img
              className="object-cover w-20 h-20 rounded-full"
              src={foodImage}
              alt="none"
            />
          </div>
        </div>
      </div>
    </>
  );
}
