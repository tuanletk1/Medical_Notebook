<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Role extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();
        $roles = [
            [
                'name' => 'Admin',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => 'Staff',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => 'User',
                'created_at' => $now,
                'updated_at' => $now
            ]
        ];

        \App\Models\Role::insert($roles);
    }
}
