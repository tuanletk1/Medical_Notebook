<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('register_injections', function (Blueprint $table) {
            $table->id();
            $table->smallInteger('the_second_time');
            $table->string('name', 255);
            $table->timestamp('date_of_birth')->nullable();
            $table->string('sex', 20);
            $table->string('phone_number', 20);
            $table->string('email', 255);
            $table->string('identity_code', 20);
            $table->string('social_insurance', 50);
            $table->string('job', 255);
            $table->string('workplace', 255);
            $table->string('address', 255);
            $table->string('city', 255);
            $table->string('district', 255);
            $table->string('ward', 255);
            $table->timestamp('date_injection')->nullable();
            $table->string('time_of_day', 50);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('register_injections');
    }
};
