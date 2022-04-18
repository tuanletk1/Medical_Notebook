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
        Schema::create('address_injection_vacc', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('vaccination_id');
            $table->foreign('vaccination_id')->references('id')->on('vaccinations');
            $table->unsignedBigInteger('address_injection_id');
            $table->foreign('address_injection_id')->references('id')->on('address_injections');
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
        Schema::dropIfExists('address_injection_vaccs');
    }
};
