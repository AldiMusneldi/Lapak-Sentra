import React, { useState } from 'react';
import bni from '../../../assets/bank/bni.svg';
import bri from '../../../assets/bank/bri.svg';
import bca from '../../../assets/bank/bca.svg';
import MANDIRI from '../../../assets/bank/MANDIRI.svg';
import { Radio, RadioGroup } from '@chakra-ui/radio';
import { Stack } from '@chakra-ui/layout';

const MetodePembayaran = () => {
  const [value, setValue] = useState('1');
  return (
    <>
      <div className="mentode-pembayaran p-2 border border-Neutral_70 rounded-md mb-2">
        <div className="title mb-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-2xl">Metode Pembayaran</h2>
          </div>
        </div>
        <div className="border border-b-1 border-t-neutral-500"></div>
        <div className="pilih-bank my-2 flex gap-10">
          <h2 className="text-lg font-semibold">Pilih Bank</h2>
          <div className="bank">
            <form action="">
              <RadioGroup onChange={setValue} value={value}>
                <Stack>
                  <Radio value="1">
                    <div className="flex gap-2 items-center">
                      <div className="img">
                        <img src={bri} alt="" />
                      </div>
                      <p className="text-md font-semibold">Bank BRI</p>
                    </div>
                  </Radio>
                  <Radio value="2">
                    <div className="flex gap-2 items-center">
                      <div className="img">
                        <img src={MANDIRI} alt="" />
                      </div>
                      <p className="text-md font-semibold">Bank MANDIRI</p>
                    </div>
                  </Radio>
                  <Radio value="3">
                    <div className="flex gap-2 items-center">
                      <div className="img">
                        <img src={bca} alt="" />
                      </div>
                      <p className="text-md font-semibold">Bank BCA</p>
                    </div>
                  </Radio>
                  <Radio value="4">
                    <div className="flex gap-2 items-center">
                      <div className="img">
                        <img src={bni} alt="" />
                      </div>
                      <p className="text-md font-semibold">Bank BNI</p>
                    </div>
                  </Radio>
                </Stack>
              </RadioGroup>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetodePembayaran;
