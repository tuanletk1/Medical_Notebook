<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class District extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();
        $districts = [
            'Huyện Hoà Vang',
            'Quận Thanh Khê',
            'Quận Sơn Trà',
            'Quận Ngũ Hành Sơn',
            'Quận Liên Chiểu',
            'Quận Hải Châu',
            'Quận Cẩm Lệ',
        ];
        $default = [
            'name' => 'Huyện Hoà Vang',
            'created_at' => $now,
            'updated_at' => $now
        ];
        $data = [];
        foreach ($districts as $district) {
            $default['name'] = $district;
            $data[] = $default;
        }

        \App\Models\District::insert($data);
    }
}
