export function HelpMeDecide() {
  return (
    <div
      className=" fixed bottom-20 left-4 w-full h-full shadow-md"
      style={{ maxWidth: "350px", maxHeight: "450px" }}
    >
      <div className="scroll-region w-full h-full p-4 pt-2 overflow-y-scroll bg-gray-100">
        <div className="header flex flex-row text-sm border border-t-0 border-r-0 border-l-0 p-2 pl-0  mt-0 justify-between border-gray-400">
          <a href="" className="underline">
            powered by m8buy
          </a>
          <div className="buttons flex flex-row">
            <button className="pr-2 bold">?</button>
            <button className=" pl-2 border border-t-0 border-r-0 border-b-0 border-gray-400">
              x
            </button>
          </div>
        </div>


        {/* input */}
        <div class="flex flex-col">
          <label
            for="price"
            class="text-lg font-light mt-3"
          >
            Help me decide
          </label>
          <div class="flex flex-row">
            <input
              type="number"
              name="price"
              class="bg-grey-lighter text-grey-darker py-2 font-normal rounded text-grey-darkest border border-grey-lighter  font-bold w-full bg-gray-200"
            />
          </div>
        </div>
      </div>

        {/* Choose products */}

      <button className="rounded-md bg-purple-600 p-4 pt-2 pb-2 m-4 text-white text-center block m-auto -mt-16">
        Invite friends to help decide
      </button>
    </div>
  );
}
