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
            $table->smallInteger('the_second_time')->nullable();
            $table->string('name', 255)->nullable();
            $table->string('code', 255)->nullable();
            $table->timestamp('date_of_birth')->nullable();
            $table->string('sex', 20)->nullable();
            $table->string('phone_number', 20)->nullable();
            $table->string('email', 255)->nullable();
            $table->string('identity_code', 20)->nullable();
            $table->string('social_insurance', 50)->nullable();
            $table->string('job', 255)->nullable();
            $table->string('workplace', 255)->nullable();
            $table->string('address', 255)->nullable();
            $table->string('city', 255)->nullable();
            $table->string('district', 255)->nullable();
            $table->string('ward', 255)->nullable();
            $table->timestamp('date_injection')->nullable();
            $table->string('time_of_day', 50)->nullable();
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
