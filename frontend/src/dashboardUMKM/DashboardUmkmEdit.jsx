import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import profile from "../assets/gambar-testimoni/aldi.svg";
import home from "../assets/icons/home.svg";
import hunian from "../assets/icons/hunian.svg";
import promotion from "../assets/icons/ceklist.svg";
import statistic from "../assets/icons/statistic.svg";
import exit from "../assets/icons/exit.svg";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { BiImageAlt } from "react-icons/bi";
import { AiFillFileImage } from "react-icons/ai";

function DashboardUmkmEdit() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px dashed #1475cf;
    height: 120px;
    width: 150px;
    cursor: pointer;
    border-radius: 5px;
  `;

  const Section = styled.section`
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border-radius: 5px;
    background-color: #e9f0ff;

    span {
      display: flex;
      align-items: center;
    }
  `;

  return (
    <>
      <div className="flex container ml-24">
        <div className="flex flex-col relative mt-24">
          <div className="bg-primary_70 w-[400px] h-[150px] rounded-t-xl flex justify-center">
            <img
              src={profile}
              className="mt-12 rounded-full w-[150px] h-[150px] z-10"
            />
          </div>
          <div className="bg-white shadow-xl w-[400px] h-[150px] rounded-b-xl flex justify-center items-center z-0">
            <div>
              <h1 className="text-2xl font-bold pt-4">Bevin Stevanius</h1>

              <Link to="/umkm/account">
                <button className="ml-4 px-4 py-2 bg-primary_70 text-white rounded">
                  Lihat Profile
                </button>
              </Link>
            </div>
          </div>
          <div className="container mt-6">
            <Link to="/umkm/dashboardumkm">
              <button className="flex items-center">
                <img src={home} />
                <p className="pl-3">Dashboard Pemilik UMKM</p>
              </button>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "100%",
              }}
            />
            <Link to="">
              <button className="mt-4 flex items-center">
                <img src={hunian} />
                <p className="pl-3">Daftarkan Produk</p>
              </button>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "100%",
              }}
            />
            <Link to="/umkm/promosi">
              <button className="mt-4 flex items-center">
                <img src={promotion} />
                <p className="pl-3">Fitur Promosi</p>
              </button>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "100%",
              }}
            />
            <Link to="/">
              <div className="mt-4 flex items-center">
                <img src={exit} className="w-[35px]" />
                <p className="pl-3">Keluar</p>
              </div>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "100%",
              }}
            />
          </div>
        </div>
        <div className="pl-6 container relative mt-24">
          <div className="bg-primary_70 w-full rounded-md h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">
              Dashboard Pemilik UMKM
            </p>
          </div>
          <div className="">
            <div className=" border-gray-300 ml-4 mt-3">
              <div className="flex mb-3">
                <h1 style={{ whiteSpace: "nowrap" }}>Nama UMKM</h1>
                <input
                  type="text"
                  className="ml-[56px] border border-black rounded-sm pl-2 h-10 w-full mb-4"
                  placeholder="Masukkan Nama UMKM Anda"
                />
              </div>
              <div className="flex mb-3">
                <h1>Logo UMKM</h1>
                <main className="pl-[63px]">
                  <Form
                    onClick={() =>
                      document.querySelector(".input-field").click()
                    }
                  >
                    <input
                      type="file"
                      accept="image/*"
                      className="input-field"
                      hidden
                      onChange={({ target: { files } }) => {
                        files[0] && setFileName(files[0].name);
                        if (files) {
                          setImage(URL.createObjectURL(files[0]));
                        }
                      }}
                    />

                    {image ? (
                      <img
                        src={image}
                        width={100}
                        height={100}
                        alt={fileName}
                      />
                    ) : (
                      <>
                        <BiImageAlt color="#1475cf" size={60} />
                        {/* <p>Browse Files to upload</p> */}
                      </>
                    )}
                  </Form>

                  {/* <Section className="uploaded-row">
                    <AiFillFileImage color="#1475cf" />
                    <span className="upload-content">
                      {fileName} -
                      <MdDelete
                        onClick={() => {
                          setFileName("No selected File");
                          setImage(null);
                        }}
                      />
                    </span>
                  </Section> */}
                </main>
              </div>
              <div className="flex mb-3">
                <h1>Alamat</h1>
                <input
                  type="text"
                  className="ml-[100px] border border-black rounded-sm pl-2 h-10 w-full mb-4"
                  placeholder="Masukkan Alamat Anda"
                />
              </div>
              <div className="flex mb-3">
                <h1>Deskripsi</h1>
                <textarea
                  type="text"
                  className="ml-[85px] border border-black rounded-sm pl-2 py-2 h-40 w-full"
                  placeholder="Masukkan Deskripsi Toko Anda"
                />
              </div>
              <div className="flex container ml-12 justify-center">
                <Link to="/umkm/dashboardumkm">
                  <button className="px-4 py-2 bg-primary_70 text-white rounded">
                    Simpan Deskripsi
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardUmkmEdit;
