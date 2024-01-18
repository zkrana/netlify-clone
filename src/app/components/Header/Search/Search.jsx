import React from "react";
import Image from "next/image";
function Search() {
  return (
    <div className="search">
      <Image src="/search.svg" width={20} height={22} alt="saerch" />
    </div>
  );
}

export default Search;
