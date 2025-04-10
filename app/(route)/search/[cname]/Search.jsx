'use client'
import React, { useEffect, useState } from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'
import DoctorList from '@/app/_components/DoctorList'

function Search({ cname }) {
  const [doctorList, setDoctorList] = useState([]);
  const [decodedName, setDecodedName] = useState('');

  useEffect(() => {
    const decoded = decodeURIComponent(cname);
    setDecodedName(decoded);
    getDoctors(decoded);
  }, [cname]);

  const getDoctors = (decodedCategoryName) => {
    GlobalApi.getDoctorByCategory(decodedCategoryName).then(resp => {
      setDoctorList(resp.data.data);
    });
  };

  return (
    <div className='mt-5'>
      <DoctorList heading={decodedName} doctorList={doctorList} />
    </div>
  );
}

export default Search;

