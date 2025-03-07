import React from "react";
import { useForm } from "react-hook-form";

const AddEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  const validatorSchema = {
    commonValidator: {
      required: {
        value: true,
        message: "This field is required*",
      },
    },
    phoneValidator: {
      required: {
        value: true,
        message:"Phone number is required*"
      },
      maxLength: {
        value: 10,
        message: "Maximum 10 numbers allowed*",
      },
      minLength: {
        value: 10,
        message: "10 numbers is required*",
      },
    },
  };

  return (
    <div className="min-h-full bg-zinc-700 flex justify-center overflow-hidden   text-white">
      <div className="bg-gray-600 bg-scroll my-5 p-4 rounded-xl h-3/4 w-3/4 mx-auto">
        <h1 className="text-center text-black text-3xl">Add Employee</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="mb-2">
            <label htmlFor="fName" className="block mb-2">
              Fullname
            </label>
            <input
              type="text"
              className="bg-transparent border text-sm rounded-lg p-2 w-full placeholder:text-gray"
              placeholder="John Doe Nova"
              {...register("fName", validatorSchema.commonValidator)}
            />
            <span className="text-red-600">{errors.fName?.message}</span>
          </div>
          <div className="mb-2">
            <label htmlFor="EmpId" className="block mb-2">
              Employee ID
            </label>
            <input
              type="text"
              className="bg-transparent border text-sm rounded-lg p-2 w-full placeholder:text-gray"
              placeholder="Emp2156Pft"
              {...register("EmpId", validatorSchema.commonValidator)}
            />
            <span className="text-red-600">{errors.EmpId?.message}</span>
          </div>
          <div className="mb-2">
            <label htmlFor="EmailId" className="block mb-2">
              Email Id
            </label>
            <input
              type="email"
              className="bg-transparent border text-sm rounded-lg p-2 w-full placeholder:text-gray"
              placeholder="example235@gmail.com"
              {...register("EmailId", validatorSchema.commonValidator)}
            />
            <span className="text-red-600">{errors.EmailId?.message}</span>
          </div>
          <div className="mb-2">
            <label htmlFor="phoneNo" className="block mb-2">
              Phone number
            </label>
            <input
              type="tel"
              className="bg-transparent border text-sm rounded-lg p-2 w-full placeholder:text-gray"
              placeholder="0123456789"
              {...register("phoneNo", validatorSchema.phoneValidator)}
            />
            <span className="text-red-600">{errors.phoneNo?.message}</span>
          </div>
          <div className="mb-2">
            <label htmlFor="DOB" className="block mb-2">
              Date of birth
            </label>
            <input
              type="date"
              name="DOB"
              className="bg-transparent border text-sm rounded-lg p-2 w-full "
              {...register("DOB",validatorSchema.commonValidator)}
            />
            <span className="text-red-600">{errors.DOB?.message}</span>
          </div>
          <div className="mb-2">
            <label htmlFor="gender" className="block mb-2">
              Date of birth
            </label>
            <div className="flex gap-3">
              <label htmlFor="male">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  id="male"
                  {...register("gender",validatorSchema.commonValidator)}
                />
                Male
              </label>
              <label htmlFor="female">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  id="female"
                  {...register("gender",validatorSchema.commonValidator)}
                />
                Female
              </label>
              <label htmlFor="other">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  id="other"
                  {...register("gender",validatorSchema.commonValidator)}
                />
                Other
              </label>
            </div>
            <span className="text-red-600">{errors.gender?.message}</span>
          </div>
          <div className="mb-2">
            <label htmlFor="address" className="block mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="enter full address"
              className="bg-transparent border text-sm rounded-lg p-2 w-full "
              {...register("address",validatorSchema.commonValidator)}
            />
            <span className="text-red-600">{errors.address?.message}</span>
          </div>
          <div className="mb-2 flex gap-5 w-full">
            <div>
              <label htmlFor="landmark" className="block mb-2">
                Landmark
              </label>
              <input
                type="text"
                name="landmark"
                placeholder="ex.st xavier school"
                className="bg-transparent border text-sm rounded-lg p-2 w-full "
                {...register("landmark",validatorSchema.commonValidator)}
              />
              <span className="text-red-600">{errors.landmark?.message}</span>
            </div>
            <div>
              <label htmlFor="city" className="block mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                placeholder="ex.Ahmedabad"
                className="bg-transparent border text-sm rounded-lg p-2 w-full "
                {...register("city",validatorSchema.commonValidator)}
              />
              <span className="text-red-600">{errors.city?.message}</span>
            </div>
            <div>
              <label htmlFor="state" className="block mb-2">
                State
              </label>
              <input
                type="text"
                name="state"
                placeholder="ex.Gujarat"
                className="bg-transparent border text-sm rounded-lg p-2 w-full "
                {...register("state",validatorSchema.commonValidator)}
              />
              <span className="text-red-600">{errors.state?.message}</span>
            </div>
          </div>
          <hr />
          <label htmlFor="" className="text-center block text-black">
            Job Details
          </label>
          <div className="mb-2">
            <label htmlFor="jobtitle" className="block mb-2">
              Job title
            </label>
            <input
              type="text"
              className="bg-transparent border text-sm rounded-lg p-2 w-full placeholder:text-gray"
              placeholder="ex. Fullstack developer"
              {...register("jobtitle",validatorSchema.commonValidator)}
            />
            <span className="text-red-600">{errors.jobtitle?.message}</span>
          </div>
          <div className="mb-2">
            <label htmlFor="department" className="block mb-2">
              Department
            </label>
            <select
              id="department"
              name="department"
              className="bg-transparent border text-sm rounded-lg p-2 w-full"
              {...register("department",validatorSchema.commonValidator)}
            >
              <option className="bg-gray-400 border text-black" value="">
                Select
              </option>
              <option className="bg-gray-400 border text-black" value="HR">
                HR
              </option>
              <option className="bg-gray-400 border text-black" value="IT">
                IT
              </option>
              <option className="bg-gray-400 border text-black" value="Finance">
                Finance
              </option>
              <option
                className="bg-gray-400 border text-black"
                value="Marketing"
              >
                Marketing
              </option>
            </select>
              <span className="text-red-600">{errors.department?.message}</span>
          </div>
          <div className="mb-2">
            <label htmlFor="empType" className="block mb-2">
              Employment Type
            </label>
            <select
              id="empType"
              name="empType"
              className="bg-transparent border text-sm rounded-lg p-2 w-full"
              {...register("empType",validatorSchema.commonValidator)}
            >
              <option className="bg-gray-400 border text-black" value="">
                Select
              </option>
              <option
                className="bg-gray-400 border text-black"
                value="FULL-TIME"
              >
                FULL-TIME
              </option>
              <option
                className="bg-gray-400 border text-black"
                value="PART-TIME"
              >
                PART-TIME
              </option>
              <option
                className="bg-gray-400 border text-black"
                value="CONTRACT"
              >
                CONTRACT
              </option>
              <option
                className="bg-gray-400 border text-black"
                value="APPRENTISE"
              >
                APPRENTISE
              </option>
            </select>
            <span className="text-red-600">{errors.empType?.message}</span>
          </div>
          <div className="mb-2">
            <label htmlFor="DOJ" className="block mb-2">
              Date of joinning
            </label>
            <input
              type="date"
              name="DOJ"
              className="bg-transparent border text-sm rounded-lg p-2 w-full "
              {...register("DOJ",validatorSchema.commonValidator)}
            />
            <span className="text-red-600">{errors.DOJ?.message}</span>
          </div>
          <div className="mb-2">
            <label htmlFor="location" className="block mb-2">
              Work Location
            </label>
            <select
              id="location"
              name="location"
              className="bg-transparent border text-sm rounded-lg p-2 w-full"
              {...register("location",validatorSchema.commonValidator)}
            >
              <option className="bg-gray-400 border text-black" value="">
                Select
              </option>
              <option className="bg-gray-400 border text-black" value="On-site">
                On-site
              </option>
              <option className="bg-gray-400 border text-black" value="Remote">
                Remote
              </option>
              <option className="bg-gray-400 border text-black" value="Hybrid">
                Hybrid
              </option>
            </select>
            <span className="text-red-600">{errors.location?.message}</span>
          </div>
          <div className="flex justify-center mt-3">
            <input
              type="submit"
              value="Add Employee"
              className="bg-blue-500 p-2 w-full rounded-lg "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
