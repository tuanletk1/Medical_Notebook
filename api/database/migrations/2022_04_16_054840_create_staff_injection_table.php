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
        Schema::create('staff_injection', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedBigInteger('address_injection_id');
            $table->foreign('address_injection_id')->references('id')->on('address_injections');
            $table->string('name', 255);
            $table->timestamp('date_of_birth')->nullable();
            $table->string('cmnd', 20);
            $table->string('sothe_bhyt', 20);
            $table->string('phone', 20);
            $table->integer('number_of_injections')->default(0);
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
        Schema::dropIfExists('staff_injections');
    }
};
