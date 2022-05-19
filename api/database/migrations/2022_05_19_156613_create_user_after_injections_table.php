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
        Schema::create('user_after_injections', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
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
        Schema::dropIfExists('user_after_injections');
    }
};
